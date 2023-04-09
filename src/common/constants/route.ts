export const route: RouteDictionary = {
  home: {
    path: "/",
    index: 0,
  },
  itinerary: {
    path: "/itinerary",
    index: 1,
  },
  expenditure: {
    path: "/expenditure",
    index: 2,
  },
  preparation: {
    path: "/preparation",
    index: 3,
    subRoute: {
      packing: "/preparation/packing"
    }
  },
  frenzy: {
    path: "/frenzy",
    index: 4,
  },
};

type RouteDictionary = {
  [name: string]: Route;
};

export type Route = {
  path: string;
  index: number;
  subRoute?: SubRoute;
};

type SubRoute = {
  [name: string]: string
}