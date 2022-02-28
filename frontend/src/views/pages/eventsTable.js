import EventsTable from "components/DataTable";
import EventFormHorizontal from "components/Form";
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
