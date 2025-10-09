export interface BlogPost {
  attributes: {
    title: string;
    slug: string;
    date: string;
    thumbnailUrl: string;
    excerpt: string;
  };
  html: string;
  toc: {
    id: string;
    text: string;
    level: number;
  }[];
}