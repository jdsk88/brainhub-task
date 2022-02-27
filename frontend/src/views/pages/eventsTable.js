import EventsTable from "components/Table";
import EventFormHorizontal from "components/FormHorizontal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_ITEMS } from "store/actions";

const EventsTableView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);
  return (
    <>
      <EventsTable />
      <EventFormHorizontal />
    </>
  );
};
export default EventsTableView;
