import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DeleteForeverSharp, EditSharp } from "@mui/icons-material";
import EventsServices from "services/api/events";
import { useDispatch } from "react-redux";

const style = {
  button: {
    width: "50px",
  },
};

export const DashboardCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    EventsServices.deleteOneItem(dispatch, data._id);
  };

  return (
    <Grid item xs={12} md={3} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "max-content",
          height: "max-content",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>
            {data && data.firstName} {data && data.lastName}
          </Typography>
          <Typography></Typography>
          <Typography>{data && data.email}</Typography>
          <Typography>
            {data && new Date(data.eventDate).toLocaleString()}
          </Typography>
        </Box>
        <Button style={style.button} variant="contained" color="success">
          <EditSharp />
        </Button>
        <Button
          onClick={() => handleDelete()}
          style={style.button}
          variant="contained"
          color="error"
        >
          <DeleteForeverSharp />
        </Button>
      </Paper>
    </Grid>
  );
};
