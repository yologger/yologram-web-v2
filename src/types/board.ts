export interface BoardData {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  categories: string[];
  tags: string[];
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
}
