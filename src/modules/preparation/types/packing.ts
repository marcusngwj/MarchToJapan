export type Category = {
  name: string;
  items: Item[];
};

type Item = {
  name: string;
  description?: string;
  count?: number;
};
