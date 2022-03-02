import { Box } from "@mui/system";
import EventsTable from "components/DataTable";
import EventFormHorizontal from "components/Form";

const EventsTableView = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <EventsTable />
      <EventFormHorizontal />
    </Box>
  );
};
export default EventsTableView;
