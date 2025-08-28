"use server";

import { revalidatePath } from "next/cache";

const BASE =
  process.env.JSON_SERVER_URL ?? // server-only (Vercel env)
  process.env.NEXT_PUBLIC_JSON_SERVER_URL ?? // fallback if you ever fetch from client
  "http://localhost:3001";

async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok)
    throw new Error(`${init?.method ?? "GET"} ${url} failed: ${res.status}`);
  return (await res.json()) as T;
}

export async function getCountedPlannedFeedbacks(): Promise<
  Record<string, number>
> {
  const statuses = ["planned", "in-progress", "live"];
  const data = await getAllProductRequests();
  const filtered = data.filter((item) => item.status !== "suggestion");
  const reduce = filtered.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  statuses.forEach((status) => {
    if (!(status in reduce)) {
      reduce[status] = 0;
    }
  });
  return reduce;
}

/** Get all product requests from json-server */
export async function getAllProductRequests(): Promise<ProductRequest[]> {
  return api<ProductRequest[]>(`${BASE}/productRequests`, {
    cache: "no-store",
  });
}
export async function getProductRequestByTagsAndStatus(
  tags: string[] | undefined,
  status: string
): Promise<ProductRequest[]> {
  if (tags) {
    return api<ProductRequest[]>(
      `${BASE}/productRequests?category=${tags.join(",")}&status=${status}`,
      {
        cache: "no-store",
      }
    );
  }
  return api<ProductRequest[]>(`${BASE}/productRequests?status=${status}`, {
    cache: "no-store",
  });
}

export async function getProductRequestById(
  id: string
): Promise<ProductRequest> {
  return api<ProductRequest>(`${BASE}/productRequests/${id}`, {
    cache: "no-store",
  });
}

export type CreateProductRequestInput = {
  title: string;
  category: ProductRequest["category"];
  status: ProductRequest["status"];
  description: string;
  upvotes?: number;
  comments?: ProductRequest["comments"];
};

export async function createCommentForRequest({
  requestId,
  content,
}: {
  requestId: string;
  content: string;
}) {
  // 1) load the current user
  const user = await api<User>(`${BASE}/currentUser`);

  // 2) load the existing request
  const request = await api<ProductRequest>(
    `${BASE}/productRequests/${requestId}`
  );
  // 3) build new comments array
  const newComment: AppComment = { id: Date.now(), user, content, replies: [] };
  const updatedComments = [...(request.comments ?? []), newComment];
  revalidatePath(`/feedback/${requestId}`);

  // 4) patch back
  return api<AppComment>(`${BASE}/productRequests/${requestId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comments: updatedComments }),
  });
}

export async function createReplyForComment({
  requestId,
  commentId,
  content,
  replyingTo,
}: {
  requestId: string;
  commentId: string;
  content: string;
  replyingTo: string;
}) {
  // 1) load current user
  const user = await api<User>(`${BASE}/currentUser`);

  // 2) load the existing request
  const request = await api<ProductRequest>(
    `${BASE}/productRequests/${requestId}`
  );

  if (!request.comments) throw new Error("This request has no comments");

  // 3) map through comments, update the one that matches
  const updatedComments = request.comments.map((c) => {
    if (c.id.toString() === commentId) {
      const replies = c.replies ? [...c.replies] : [];
      const newReply: Reply = { content, replyingTo, user };
      return { ...c, replies: [...replies, newReply] };
    }
    return c;
  });

  // 4) patch back with updated comments array
  const updatedRequest = await api<ProductRequest>(
    `${BASE}/productRequests/${requestId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comments: updatedComments }),
    }
  );

  // 5) invalidate the cache so UI refreshes
  revalidatePath(`/feedback/${requestId}`);

  return updatedRequest;
}

export async function createNewProductRequest({
  title,
  category,
  description,
}: {
  title: string;
  category: ProductRequest["category"];
  description: string;
}) {
  return api<ProductRequest>(`${BASE}/productRequests`, {
    method: "POST",
    body: JSON.stringify({
      id: Date.now().toString(),
      title,
      category,
      description,
      upvotes: 0,
      status: "suggestion",
      comments: [],
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function updateProductRequest({
  id,
  title,
  category,
  status,
  description,
}: {
  id: string;
  title: string;
  category: ProductRequest["category"];
  status: ProductRequest["status"];
  description: string;
}) {
  const updated = await api<ProductRequest>(`${BASE}/productRequests/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      category,
      status,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidatePath(`/feedback/${id}`);
  return updated;
}

export async function deleteProductRequestById(id: string) {
  return api<ProductRequest>(`${BASE}/productRequests/${id}`, {
    method: "DELETE",
  });
}

export async function upvoteRequest({ requestId }: { requestId: string }) {
  const request = await api<ProductRequest>(
    `${BASE}/productRequests/${requestId}`
  );
  const nextFlag = !Boolean(request.upvotedByCurrentUser);
  const delta = nextFlag ? 1 : -1;
  const nextUpvotes = Math.max(0, (request.upvotes ?? 0) + delta);

  // 1. increment request upvotes
  await api<ProductRequest>(`${BASE}/productRequests/${requestId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      upvotes: nextUpvotes,
      upvotedByCurrentUser: nextFlag,
    }),
  });
  revalidatePath(`/`);
}
