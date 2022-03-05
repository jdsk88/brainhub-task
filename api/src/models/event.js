import mongoose from "mongoose";

export const EventSchema = mongoose.Schema({
  firstName: { type: String, required: [true, "First Name name required"] },
  lastName: { type: String, required: [true, "Last Name name required"] },
  email: { type: String, required: [true, "Email Name name required"] },
  eventDate: {
    type: Number,
    required: [true, "Event Date Name name required"],
  },
});

export const Event = mongoose.model("Event", EventSchema);
