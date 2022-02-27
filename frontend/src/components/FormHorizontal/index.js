import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Box, TextField, Paper } from "@mui/material";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import EventsServices from "services/events";
import { GET_ITEMS } from "store/actions";

const EventFormHorizontal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

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
      EventsServices.createItem(dispatch, newEvent);
      dispatch({ type: GET_ITEMS });
      formik.resetForm();
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        component={Paper}
        sx={{
          py: 2,
          width: "100%",
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
        />
        <Button
          sx={{ width: "15%" }}
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
