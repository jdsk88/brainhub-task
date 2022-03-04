import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import EventsServices from "services/api/events";
import { useSnackbar } from "notistack";
import { initialValues, validationSchema } from "components/Form/validation";

export const DialogAdd = ({ data }) => {
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = (msg, variant) => {
    enqueueSnackbar(msg, { variant });
  };
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: () => {
      const newEvent = {
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        email: formik.values.email,
        eventDate: Date.parse(formik.values.eventDate),
      };
      EventsServices.createItem(dispatch, newEvent, Snackbar);
      formik.resetForm();
    },
  });
  return (
    <>
      <Button
        sx={{
          position: "fixed",
          bottom: 25,
          right: 30,
        }}
        variant="contained"
        color={"primary"}
        onClick={handleClickOpen}
      >
        Add Event
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="alert-dialog-title">
            {"Add event to store in mongodb"}
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 3,
              justifyContent: "space-evenly",
              height: "50vh",
              width: "50v",
            }}
          >
            <TextField
              fullWidth
              id={"firstName"}
              name={"firstName"}
              type={"text"}
              label={"First Name"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName ?? formik.values.firstName}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              id={"lastName"}
              name={"lastName"}
              type={"text"}
              label={"Last Name"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName ?? formik.values.lastName}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              fullWidth
              id={"email"}
              name={"email"}
              type={"email"}
              label={"e-mail"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email ?? formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id={"eventDate"}
              name={"eventDate"}
              type={"datetime-local"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.eventDate ?? formik.values.eventDate}
              error={
                formik.touched.eventDate && Boolean(formik.errors.eventDate)
              }
              helperText={formik.touched.eventDate && formik.errors.eventDate}
            />
            <Button fullWidth type="submit" variant="contained" color="success">
              Create Event
            </Button>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
