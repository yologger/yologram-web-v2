export interface HomeBoardData {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  categories: string[];
  tags: string[];
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
}
