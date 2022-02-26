import { Event } from "../models/event.js";

export const EventRouteHandlers = {
  getAll: async () => {
    const result = Event.find();
    return result;
  },
  getOne: async (id) => {
    Event.countDocuments({ _id: id }, (err, count) => {
      if (count > 0) {
        console.log("exist");
        const result = Event.findById({ _id: id });
        return result;
      } else {
        console.log("not exist");
        return "no id like this";
      }
    });
  },
  addOne: async (data) => {
    if (typeof data === "object") {
      const result = new Event(data);
      result.save(result);
      return "event was created";
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
