import { Box } from "@mui/system";
import EventsTable from "components/DataTable";
import { DialogAdd } from "components/DialogAdd";

const EventsTableView = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <EventsTable />
      <DialogAdd />
    </Box>
  );
};
export default EventsTableView;
