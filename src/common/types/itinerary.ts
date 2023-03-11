export type ViewProps = {
  itinerary: Itinerary;
  day: string;
  time: string;
};

export type Itinerary = {
  [day: number]: ItineraryDay;
};

type ItineraryDay = {
  name: string;
  date: string;
  timeline: ItineraryItem[];
};

export type ItineraryItem = {
  name: string;
  time: string;
  thumbnail: string;
  activity?: ItineraryItemActivity;
};

export type ItineraryItemActivity = {
  location: string;
  duration: string;
  rating?: number;
  url?: string;
  narratives: ItineraryItemActivityNarrative[];
  images?: string;
};

export type ItineraryItemActivityNarrative = {
  title?: string;
  content: string;
};
