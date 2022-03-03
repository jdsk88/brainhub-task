export const getErrors = (error) => {
  let errorArray = [];
  if (error) {
    if (error.errors["firstName"]) {
      errorArray.push("firstName");
    }
    if (error.errors["lastName"]) {
      errorArray.push("lastName");
    }
    if (error.errors["email"]) {
      errorArray.push("email");
    }
    if (error.errors["eventDate"]) {
      errorArray.push("eventDate");
    }
  } else {
    errorArray.push("No Errors - Event Saved Succefully");
  }
  return errorArray;
};
