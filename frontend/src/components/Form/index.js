import React from "react";
import { useDispatch } from "react-redux";
import { Button, Box, TextField, Paper } from "@mui/material";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import EventsServices from "services/api/events";
import { useSnackbar } from "notistack";

const EventFormHorizontal = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const Snackbar = (msg, variant) => {
    enqueueSnackbar(msg, { variant });
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
    <form onSubmit={formik.handleSubmit}>
      <Box
        component={Paper}
        sx={{
          py: 2,
          width: "100%",
          height: "112px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          sx={{ width: "20%" }}
          id={"firstName"}
          name={"firstName"}
          type={"text"}
          label={"First Name"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName ?? formik.values.firstName}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          sx={{ width: "20%" }}
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
          sx={{ width: "20%" }}
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
          sx={{ width: "20%" }}
          id={"eventDate"}
          name={"eventDate"}
          type={"datetime-local"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.eventDate ?? formik.values.eventDate}
          error={formik.touched.eventDate && Boolean(formik.errors.eventDate)}
          helperText={formik.touched.eventDate && formik.errors.eventDate}
        />
        <Button
          sx={{ width: "15%", height: "56px" }}
          type="submit"
          variant="contained"
          color="success"
        >
          Create Event
        </Button>
      </Box>
    </form>
  );
};
export default EventFormHorizontal;
