import { itinerary } from "../data";

export const getTime = (
  day: string,
  time: string | undefined
): string | undefined => {
  return isValidTime(day, time) ? time : undefined;
};

const isValidTime = (
  day: string,
  time: string | undefined
): string | undefined => {
  const dayId = parseInt(day);
  const item = itinerary[dayId].timeline.find((item) => item.time === time);
  return item ? time : undefined;
};
