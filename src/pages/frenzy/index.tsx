import Activity from "@/views/itinerary/components/activity";
import { itinerary } from "@/common/constants/itinerary";

export default function Index() {
  let item = itinerary[0].timeline[1];
  let activity = item.activity;
  return (
    <>
      {activity && (
        <Activity
          name={item.name}
          thumbnail={item.thumbnail}
          location={activity.location}
          duration={activity.duration}
          rating={activity.rating}
          url={activity.url}
          narratives={activity.narratives}
        />
      )}
    </>
  );
}
