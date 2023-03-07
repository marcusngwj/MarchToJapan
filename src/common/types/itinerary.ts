export type ViewProps = {
  itinerary: Itinerary,
  day: string;
  time: string;
};

export type Itinerary = {
  [day: number]: ItineraryDay
}

type ItineraryDay = {
  name: string,
  date: string,
  timeline: Timeline[]
}

export type Timeline = {
  time: string,
  title: string,
  thumbnail: string
}