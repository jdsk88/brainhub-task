export const getErrors = (error) => {
  let errorArray = [];
  if (error) {
    if (error.errors["firstName"]) {
      console.log(error.errors["firstName"].message);
      errorArray.push("firstName");
    }
    if (error.errors["lastName"]) {
      console.log(error.errors["lastName"].message);
      errorArray.push("lastName");
    }
    if (error.errors["email"]) {
      console.log(error.errors["email"].message);
      errorArray.push("email");
    }
    if (error.errors["eventDate"]) {
      console.log(error.errors["eventDate"].message);
      errorArray.push("eventDate");
    }
  } else {
    console.log("No Errors - Event Saved Succefully");
  }
  return errorArray;
};
