export interface BoardData {
  bid: number;
  title: string;
  content: string;
  writer: {
    uid: string;
    name: string;
    nickname: string;
    avatar?: string;
  };
  createdDate: string;
  modifiedDate: string;
  categories?: string[];
  tags?: string[];
  metrics: {
    commentCount: number;
    likeCount: number;
    viewCount: number;
  };
}
