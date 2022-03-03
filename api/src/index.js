import "../config/mongo.js";
import { logger, cors_options } from "../config/options.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import errorhandler from "errorhandler";
import { env } from "../../setupEnv.js";
import path from "path";

export const app = express();

const __dirname = path.resolve();

app.use(morgan(logger));
app.use(cors(cors_options));
app.use(errorhandler());
app.use("/", express.static(path.join(__dirname, "build")));
app.use("/api", express.json());
app.use("/api/", routes);

app.use("/api", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", `*`);
  res.setHeader("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/*", function (req, res) {
  const url = __dirname.replace("/api", "");
  res.sendFile(`${url}/build/index.html`, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

//server start
app.listen(
  {
    host: env.HOST,
    port: env.PORT,
  },
  () => console.log(`Listening on http://${env.HOST}:${env.PORT}/`)
);
export default routes;
