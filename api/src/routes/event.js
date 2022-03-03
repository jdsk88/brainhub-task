import express from "express";
import { EventRouteHandlers } from "../services/event.js";

const routes = express.Router();

routes.get("/", async (req, res) => {
  const response = await EventRouteHandlers.getAll();
  res.send(response);
});

routes.get("/initialState", async (req, res) => {
  const response = await EventRouteHandlers.initialState();
  res.send(response);
});

routes.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await EventRouteHandlers.getOne(id);
  } catch (err) {
    next(err);
  }
});

routes.post("/create", async (req, res, next) => {
  try {
    const data = req.body;
    const result = await EventRouteHandlers.addOne(data).then(
      (response) => response
    );
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
    next(err);
  }
});

routes.delete("/delete/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await EventRouteHandlers.deleteOne(id);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

routes.delete("/delete", async (req, res, next) => {
  try {
    const result = await EventRouteHandlers.deleteAll();
    res.send(result);
  } catch (err) {
    next(err);
  }
});
export default routes;
