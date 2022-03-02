import "../config/mongo.js";
import { logger, cors_options } from "../config/options.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";

export const app = express();

app.use(morgan(logger));
app.use(cors(cors_options));
app.use("/api", express.json());
app.use("/api/", routes);

//server start
app.listen(
  {
    host: "localhost",
    port: "8888",
  },
  () => console.log(`Listening on http://${"localhost"}:${"8888"}/`)
);
export default routes;
