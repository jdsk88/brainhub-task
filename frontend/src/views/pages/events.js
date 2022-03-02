import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { DashboardCard } from "components/Card";
import { FloatingButton } from "components/FloatingButton";

const EventsView = () => {
  const events = useSelector((state) => state.events.items);

  return (
    <>
      <Grid container spacing={3} mb={15}>
        {events &&
          events.map((item, i) => (
            <DashboardCard key={item.eventDate + "_" + i} data={item} />
          ))}
        <FloatingButton />
      </Grid>
    </>
  );
};
export default EventsView;
