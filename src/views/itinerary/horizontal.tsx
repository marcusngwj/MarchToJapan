import { useState } from "react";
import { ViewProps } from "@/common/types/itinerary";

export default function View({itinerary, day, time}: ViewProps) {
  const [value, setValue] = useState(day);

  return (
    <div>Under Construction
      <div>Day: {value}</div>
    </div>
  )
}