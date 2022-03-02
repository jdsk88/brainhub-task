import mongoose from "mongoose";
import { env } from "../../setupEnv";

mongoose
  .connect(env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected ${env.MONGO_DB}`);
  });