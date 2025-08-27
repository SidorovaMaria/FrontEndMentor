import { z } from "zod";
export const ZCategory = z.enum(["ui", "ux", "enhancement", "bug", "feature"]);
export const ZStatus = z.enum(["planned", "in-progress", "live", "suggestion"]);

export const zUser = z.object({
  image: z.string(),
  name: z.string().max(100),
  username: z.string().max(100),
  productRequests: z.any().optional(),
});

export const zReply = z.object({
  content: z.string().min(1).max(500),
  replyingTo: z.string().min(1).max(100),
  user: zUser,
});
export const zComment = z.object({
  id: z.number().int().positive(),
  content: z.string().min(1).max(250),
  user: zUser,
  replies: z.array(zReply).optional(),
});

export const zProductRequest = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(250),
  status: ZStatus,
  category: ZCategory,
  user: zUser,
  comments: z.array(zComment).optional(),
});
export const zRootData = z.object({
  currentUser: zUser,
  productRequests: z.array(zProductRequest).optional(),
});
export type TZProductRequest = z.infer<typeof zProductRequest>;
export type TZRootData = z.infer<typeof zRootData>;
