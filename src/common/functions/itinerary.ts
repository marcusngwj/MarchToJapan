import { itinerary, defaultDay } from "../constants/itinerary";

export const getDay = (input: string | undefined): string => {
  let day = input ?? defaultDay;
  return isValidDay(day) ? day : defaultDay;
};

const isValidDay = (input: string): boolean => {
  let isValid = false;
  Object.keys(itinerary).forEach((key) => {
    if (key.includes(input)) {
      isValid = true;
      return;
    }
  });
  return isValid;
};

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
