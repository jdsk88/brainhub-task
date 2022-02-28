import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export const DashboardCard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        ></Paper>
      </Grid>
    </Grid>
  );
};
