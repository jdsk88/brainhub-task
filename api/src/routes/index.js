import express from "express";
import event from "./event.js";

const routes = express.Router({});

routes.use("/events", event);

export default routes;
