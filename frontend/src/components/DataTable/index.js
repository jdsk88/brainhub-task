import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { AlertDialog } from "components/Dialog";

const EventsTable = () => {
  const events = useSelector((state) => state.events.items);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "E-Mail", width: 200 },
    { field: "eventDate", headerName: "Event Date ", width: 200 },
    {
      field: "delete",
      headerName: "Delete item ",
      width: 200,
      renderCell: (cellValues) => {
        return <AlertDialog data={cellValues} />;
      },
    },
  ];

  let rows = [];
  events.forEach((element, i) => {
    rows.push({
      _id: element._id,
      id: i + 1,
      firstName: element.firstName,
      lastName: element.lastName,
      email: element.email,
      eventDate: new Date(element.eventDate).toLocaleString(),
    });
  });

  return (
    <div style={{ height: "calc(70vh - 56px)", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};
export default EventsTable;
