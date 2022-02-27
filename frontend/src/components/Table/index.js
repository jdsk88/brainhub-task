import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { GET_ITEMS, SET_ITEMS } from "store/actions";

const EventsTable = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.items);
  console.log(events);

  useEffect(() => {
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

  const columns = [
    { field: "id", id: "ID", width: 100 },
    { field: "firstName", firstName: "First Name", width: 150 },
    { field: "lastName", lastName: "Last Name", width: 150 },
    { field: "email", email: "E-Mail", width: 200 },
    { field: "eventDate", eventDate: "Event Date ", width: 200 },
  ];

  let rows = [];
  events[0].forEach((element, i) => {
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
