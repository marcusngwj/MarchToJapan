import { itinerary } from "../data";
import { defaultDay } from "@/common/constants/itinerary";

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
