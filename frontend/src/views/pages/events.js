import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { DashboardCard } from "components/Card";
import { DialogAdd } from "components/DialogAdd";
import { Paper, Typography } from "@mui/material";

const EventsView = () => {
  const events = useSelector((state) => state.events.items);

  return (
    <>
      <Grid container spacing={3} mb={10}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <Typography variant="h4" textAlign={"center"}>
              {events && events.length} events stored in mongodb
            </Typography>
          </Paper>
        </Grid>
        {events &&
          events.map((item, i) => (
            <DashboardCard key={item.eventDate + "_" + i} data={item} />
          ))}
        <DialogAdd />
      </Grid>
    </>
  );
};
export default EventsView;
