import { Event } from "../models/event.js";
import { items } from "../tests/initialState.js";
import { getErrors } from "./errors.js";

export const EventRouteHandlers = {
  initialState: async () => {
    const count = await Event.find();

    const result = Event.insertMany(items);
    return result;
  },
  getAll: async () => {
    const result = Event.find();
    return result;
  },
  getOne: async (id) => {
    Event.countDocuments({ _id: id }, (error, count) => {
      if (count > 0) {
        const result = Event.findById({ _id: id });
        return result;
      } else {
        return error;
      }
    });
  },
  addOne: async (data) => {
    if (typeof data === "object") {
      const result = new Event(data);
      result.save(function (error, result) {
        let errors = getErrors(error);
      });
      return result;
    } else {
      return "event was not created";
    }
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
