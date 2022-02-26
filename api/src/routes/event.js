import express from "express";
import { EventRouteHandlers } from "../services/event.js";

const routes = express.Router();

routes.get("/", async (req, res) => {
  const response = await EventRouteHandlers.getAll();
  res.send(response);
});

routes.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await EventRouteHandlers.getOne(id);
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

routes.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await EventRouteHandlers.addOne(data).then(
      (response) => response
    );
    console.log(result);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

routes.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await EventRouteHandlers.updateOne(id, data);
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

routes.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await EventRouteHandlers.deleteOne(id);
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

routes.delete("/delete/all", async (req, res, next) => {
  try {
    const result = await EventRouteHandlers.deleteAll();
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
export default routes;
