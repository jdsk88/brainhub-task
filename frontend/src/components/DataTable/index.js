import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { AlertDialog } from "components/Dialog";

const EventsTable = () => {
  const [rowData, setRowData] = useState("");

  const events = useSelector((state) => state.events.items);

  const columns = [
    { field: "id", headerName: "No.", headerAlign: "center", width: 120 },
    {
      field: "firstName",
      headerName: "First Name",
      headerAlign: "left",
      width: 250,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      headerAlign: "left",
      width: 250,
    },
    { field: "email", headerName: "E-Mail", headerAlign: "left", width: 250 },
    {
      field: "eventDate",
      headerName: "Event Date ",
      headerAlign: "left",
      width: 250,
    },
    {
      field: "delete",
      headerName: "Delete item ",
      headerAlign: "left",
      width: 200,
      renderCell: () => {
        return <AlertDialog data={rowData} />;
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
    <div
      style={{
        height: "calc(100vh - 248px)",
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        density="comfortable"
        onCellClick={(e) => setRowData(e.row)}
      />
    </div>
  );
};
export default EventsTable;
