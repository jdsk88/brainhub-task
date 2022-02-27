import mongoose from "mongoose";

export const EventSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  eventDate: { type: Number },
});

export const Event = mongoose.model("Event", EventSchema);

// {
//   "firstName": "Maciek",
//   "lastName": "Jakobszy",
//   "email": "jdsk88@gmail.com",
//   "eventDate": "26.02.2022 13:33:33",
// }
