import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  ArrowBack,
  Cancel,
  DeleteForeverSharp,
  EditSharp,
  Save,
} from "@mui/icons-material";
import EventsServices from "services/api/events";
import { useDispatch } from "react-redux";
import { styles } from "./styles";

import { useFormik } from "formik";
import { initialValues, validationSchema } from "components/Form/validation";
const style = {
  button: {
    width: "75px",
    height: "75px",
  },
};

export const DashboardCard = ({ data }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
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
      EventsServices.updateItem(dispatch, newEvent);
      formik.resetForm();
    },
  });
  const handleDelete = () => {
    EventsServices.deleteOneItem(dispatch, data._id);
    setIsDelete(false);
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <Grid item xs={12} md={3} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "150px",
        }}
      >
        {isDelete ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
              }}
            >
              <Button
                onClick={() => handleDelete()}
                fullWidth
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
                variant="contained"
                color="error"
              >
                <DeleteForeverSharp sx={{ width: "30%" }} />
                <Typography sx={{ width: "70%" }}> confirm delete</Typography>
              </Button>
              <Button
                onClick={() => setIsDelete(false)}
                fullWidth
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "stretch",
                }}
                variant="contained"
                color={"primary"}
              >
                <ArrowBack sx={{ width: "30%" }} />
                <Typography sx={{ width: "70%" }}>cancel</Typography>
              </Button>
            </Box>{" "}
          </>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                height: "100%",
                justifyContent: "space-evenly",
              }}
            >
              {isEdit ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <TextField
                      id={"firstName"}
                      name={"firstName"}
                      type={"text"}
                      placeholder={
                        data.firstName
                          ? data.firstName
                          : formik.touched.firstName && formik.errors.firstName
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName ?? formik.values.firstName}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      style={styles.name}
                      InputProps={{ style: styles.input }}
                    />
                    <TextField
                      id={"lastName"}
                      name={"lastName"}
                      type={"text"}
                      placeholder={
                        data.lastName
                          ? data.lastName
                          : formik.touched.lastName && formik.errors.lastName
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName ?? formik.values.lastName}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      style={styles.name}
                      InputProps={{ style: styles.input }}
                    />
                  </Box>

                  <TextField
                    placeholder={
                      data.email
                        ? data.email
                        : formik.touched.email && formik.errors.email
                    }
                    name={"email"}
                    type={"email"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email ?? formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    style={styles.textField}
                    InputProps={{ style: styles.input }}
                  />
                  <TextField
                    name={"eventDate"}
                    type={"datetime-local"}
                    placeholder={
                      data.eventDate
                        ? data.eventDate
                        : formik.touched.eventDate && formik.errors.eventDate
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.eventDate ?? formik.values.eventDate}
                    error={
                      formik.touched.eventDate &&
                      Boolean(formik.errors.eventDate)
                    }
                    style={styles.textField}
                    InputProps={{ style: styles.input }}
                  />
                </>
              ) : (
                <>
                  <Typography>
                    {data && data.firstName} {data && data.lastName}
                  </Typography>
                  <Typography>{data && data.email}</Typography>
                  <Typography>
                    {data && new Date(data.eventDate).toLocaleString()}
                  </Typography>
                </>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                height: "100%",
              }}
            >
              <Button
                onClick={() => handleEdit()}
                style={style.button}
                variant="contained"
                color={isEdit ? "primary" : "success"}
              >
                {isEdit ? <Save /> : <EditSharp />}
              </Button>
              <Button
                onClick={() => setIsDelete(true)}
                style={style.button}
                variant="contained"
                color="error"
              >
                <DeleteForeverSharp />
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Grid>
  );
};
