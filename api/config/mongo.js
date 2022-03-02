import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/brainhub", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected ${"mongodb://localhost:27017/brainhub"}`);
  });