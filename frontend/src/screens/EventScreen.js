import { useParams } from "react-router-dom";

const EventScreen = () => {
    const params = useParams()
  return (
    <>
      <p>Event details screen of Event {params.id}</p>
    </>
  );
};

export default EventScreen;
