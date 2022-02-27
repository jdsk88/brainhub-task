import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { GET_ITEMS } from "store/actions";

const EventsTable = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.items);
  console.log(events);

  useEffect(() => {
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "E-Mail", width: 200 },
    { field: "eventDate", headerName: "Event Date ", width: 200 },
    ];

  let rows = [];
  events.forEach((element, i) => {
    rows.push({
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
        checkboxSelection
      />
    </div>
  );
};
export default EventsTable;
