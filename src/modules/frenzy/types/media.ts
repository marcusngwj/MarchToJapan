export type MediaCollection = Asset[];

export type Asset = {
  thumbnail: string;
  content: Content;
};

type Content = {
  url: string;
  name: string;
  description: string;
  tags?: string[];
};
