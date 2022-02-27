import { Stack, TextField } from "@mui/material";
import DateAndTimePicker from "components/DateTimePicker";
import React from "react";
const inputs = [
  { label: "First Name", value: "", type: "text" },
  { label: "Last Name", value: "", type: "text" },
  { label: "e-mail", value: "", type: "email" },
];

const EventForm = () => {
  return (
    <Stack spacing={3} sx={{ width: "50%", mt: "10%", ml: "25%", mr: "25%" }}>
      {inputs.map((input) => (
        <TextField type={"text"} label={input.label} />
      ))}
      <DateAndTimePicker />
    </Stack>
  );
};
export default EventForm;
