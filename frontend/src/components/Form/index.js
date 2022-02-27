import React from "react";
import { useDispatch } from "react-redux";
import { Button, Paper, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import EventsServices from "services/events";
import { getRandomIntInclusive } from "services/helpers/random";

const EventForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => {
      console.log(formik.isValidating);
      const newEvent = {
        id: getRandomIntInclusive(100000, 999999),
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        email: formik.values.email,
        eventDate: Date.parse(formik.values.eventDate),
      };
      EventsServices.createItem(dispatch, newEvent);
      formik.resetForm();
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack component={Paper} spacing={3} sx={{ width: "100%", p: 2 }}>
        <TextField
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
          id={"eventDate"}
          name={"eventDate"}
          type={"datetime-local"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.eventDate ?? formik.values.eventDate}
          error={formik.touched.eventDate && Boolean(formik.errors.eventDate)}
        />
        <Button type="submit" variant="contained" color="success">
          Create Event
        </Button>
      </Stack>
    </form>
  );
};
export default EventForm;
