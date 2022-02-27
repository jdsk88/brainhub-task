// import React from "react";

// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DateAdapter from "@mui/lab/AdapterMoment";
// import TimePicker from "@mui/lab/TimePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";
// import { Box } from "@mui/system";

// const DateAndTimePicker = ({
//   id,
//   name,
//   formikData,
//   onBlur,
//   formikValue,
//   formikError,
// }) => {
//   const [value, setValue] = React.useState(null);

//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };

//   // console.log(value ?? value._d);
//   return (
//     <LocalizationProvider dateAdapter={DateAdapter}>
//       <Stack
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-evenly",
//           width: "100%",
//         }}
//       >
//         <Box style={{ width: "50%" }}>
//           <MobileDatePicker
//             fullWidth
//             label="Date mobile"
//             inputFormat="MM/dd/yyyy"
//             value={value}
//             onChange={handleChange}
//             renderInput={(params) => (
//               <TextField
//                 id={"date"}
//                 name={"date"}
//                 onBlur={onBlur}
//                 value={formikValue}
//                 error={formikError}
//                 {...params}
//               />
//             )}
//           />
//         </Box>
//         <Box style={{ width: "50%" }}>
//           <TimePicker
//             fullWidth
//             label="Time"
//             value={value}
//             onChange={handleChange}
//             renderInput={(params) => (
//               <TextField
//                 id={"date"}
//                 name={"date"}
//                 onBlur={onBlur}
//                 value={formikValue}
//                 error={formikError}
//                 {...params}
//               />
//             )}
//           />
//         </Box>
//       </Stack>
//     </LocalizationProvider>
//   );
// };

// export default DateAndTimePicker;
