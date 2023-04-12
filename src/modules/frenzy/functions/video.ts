import { Tag } from "../data/tag";

export const isVideoFile = (tags: string[] | undefined): boolean => {
  return tags?.some((item) => item === Tag.video) ?? false;
};
