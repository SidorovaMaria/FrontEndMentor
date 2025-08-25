interface Reply {
  content: string;
  replyingTo: User.username;
  user: User;
}
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
  status: string;
  description: string;
  comments?: string[] | undefined;
}
