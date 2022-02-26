import "../config/mongo.js";
import { logger, cors_options } from "../config/options.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";

const app = express();

app.use(morgan(logger));
app.use(cors(cors_options));
app.use("/api", express.json());
app.use("/api/", routes);
//
//server start
app.listen(
  {
    host: process.env.HOST,
    port: process.env.PORT,
  },
  () =>
    console.log(`Listening on http://${process.env.HOST}:${process.env.PORT}/`)
);
export default routes;
