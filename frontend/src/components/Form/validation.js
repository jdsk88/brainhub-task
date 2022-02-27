import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .max(15, "First name should be of maximum 15 characters length")
    .required("First name  is required"),
  lastName: yup
    .string("Enter your last name")
    .max(15, "Last name should be of maximum 15 characters length")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  eventDate: yup.date().required("Date and time is required"),
});

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  eventDate: "",
};
