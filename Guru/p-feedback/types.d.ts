interface Reply {
  content: string;
  replyingTo: User.username;
  user: User;
}
const statusTypes = ["planned", "in-progress", "live", "suggestion"] as const;
type StatusType = (typeof statusTypes)[number];
const CategoryFilter = ["UI", "UX", "Enhancement", "Bug", "Feature"] as const;
type CategoryType = (typeof CategoryFilter)[number];

interface User {
  image: string;
  name: string;
  username: string;
  productRequests?: ProductRequest[];
}

interface Comment {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
}

interface ProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: StatusType;
  description: string;
  comments?: Comment[] | undefined;
}
