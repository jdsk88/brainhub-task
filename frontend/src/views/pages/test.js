import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box, TextField, Paper } from "@mui/material";
import { GET_ITEMS, SET_ITEMS, DELETE_ONE_ITEM } from "store/actions";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "components/Form/validation";
import { getRandomIntInclusive } from "services/helpers/random";
import EventsServices from "services/events";

function PricingContent() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.items);

  React.useEffect(() => {
    dispatch({ type: GET_ITEMS });
  }, [dispatch]);

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

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "E-Mail", width: 200 },
    { field: "eventDate", headerName: "Event Date ", width: 200 },
    ];

  let rows = [];
  events.forEach((element, i) => {
    rows.push({
      id: i + 1,
      firstName: element.firstName,
      lastName: element.lastName,
      email: element.email,
      eventDate: new Date(element.eventDate).toLocaleString(),
    });
  });

  return (
    <>
      <div style={{ height: "calc(70vh - 56px)", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>

      <Grid item xs={12} sm={12} md={12}>
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
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
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
              error={
                formik.touched.eventDate && Boolean(formik.errors.eventDate)
              }
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
      </Grid>
    </>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
