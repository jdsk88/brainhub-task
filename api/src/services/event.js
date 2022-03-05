import { Event } from "../models/event.js";
import { items } from "../tests/initialState.js";
// import { getErrors } from "./errors.js";
const getErrors = (error) => {
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

export const EventRouteHandlers = {
  initialState: async () => {
    const result = Event.insertMany(items);
    return result;
  },
  getAll: async () => {
    const result = Event.find();
    return result;
  },
  getOne: async (id) => {
    const result = Event.findById({ _id: id });
    return result;
  },
  addOne: async (data) => {
    const result = new Event(data);
    result.save(function (error, result) {
      getErrors(error);
    });
    return result;
  },
  updateOne: async (id, data) => {
    const result = Event.findById({ _id: id });
    return result.updateOne(data);
  },
  deleteOne: async (id) => {
    const result = Event.deleteOne({ _id: id });
    return result;
  },
  deleteAll: async () => {
    const result = Event.deleteMany();
    return result;
  },
};
