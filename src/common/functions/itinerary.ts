import { itinerary, defaultDay } from "../constants/itinerary";

export const getDay = (input: string | undefined): string => {
  let day = input ?? defaultDay;
  return isValidDay(day) ? day : defaultDay;
};

const isValidDay = (input: string): boolean => {
  let isValidDay = false;
  Object.keys(itinerary).forEach((key) => {
    if (key.includes(input)) {
      isValidDay = true;
      return;
    }
  });
  return isValidDay;
};
