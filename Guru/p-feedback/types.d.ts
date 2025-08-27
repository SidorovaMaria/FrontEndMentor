// Request Status

interface User {
  image: string;
  name: string;
  username: string;
  productRequests?: ProductRequest[];
  upvotedRequests?: string[];
}
type CurrentUser = User;
interface Reply {
  content: string;
  replyingTo: User["username"];
  user: User;
}

interface AppComment {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
}

interface ProductRequest {
  id: string;
  title: string;
  category: CategoryType;
  upvotes: number;
  status: StatusType;
  description: string;
  comments?: AppComment[] | undefined;
  upvotedByCurrentUser?: boolean;
}
interface RootData {
  currentUser: CurrentUser;
  productRequests: ProductRequest[];
}
