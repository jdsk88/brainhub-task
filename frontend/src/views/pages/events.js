import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { DashboardCard } from "components/Card";
import { FloatingForm } from "components/FloatingForm";

const EventsView = () => {
  const events = useSelector((state) => state.events.items);

  return (
    <>
      <Grid container spacing={3} mb={17}>
        {events &&
          events.map((item, i) => (
            <DashboardCard key={item.eventDate + "_" + i} data={item} />
          ))}
        <FloatingForm />
      </Grid>
    </>
  );
};
export default EventsView;
