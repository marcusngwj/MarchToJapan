import { Itinerary } from "./itineraryProps";

export type ViewProps = {
  itinerary: Itinerary;
  day: string;
  time?: string;
};