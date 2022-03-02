import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EventsServices from "services/events";
import { useDispatch } from "react-redux";

export const AlertDialog = ({ data }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  console.log(data.cellValues);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    EventsServices.deleteOneItem(dispatch, data.cellValues.row._id);
    handleClose();
  };

  return (
    <div>
      <Button
        // sx={styles.button}
        variant="contained"
        color={"error"}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you shure to delete this event?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Event of {data.row.firstName} will be deleted!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color={"inherit"} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color={"error"}
            onClick={() => handleDelete()}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
