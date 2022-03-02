import mongoose from "mongoose";
import request from "supertest";
import { env } from "../../../setupEnv";
import { app } from "../index";
import { items } from "./initialState";

let _id;
const expectedKeys = [
  "__v",
  "_id",
  "email",
  "eventDate",
  "firstName",
  "lastName",
];

let server;

beforeAll(async () => {
  await mongoose.connect(env.MONGO_DB);
  server = app.listen(4000, () => {
    global.agent = request.agent(server);
  });
});

afterAll(async () => {
  await server.close();
  await mongoose.disconnect();
});
describe("EVENT POST ENDPOINT TEST", () => {
  items.forEach((item) => {
    it("should create a new event item", async () => {
      const res = await request(app).post("/api/events/create").send(item);
      expect(res.statusCode).toEqual(200);
      expect(Object.keys(res.body).sort()).toEqual(expectedKeys.sort());
    });
  });
});

describe("EVENT GET ENDPOINT TEST", () => {
  it("should get event list or empty array", async () => {
    const res = await request(app).get("/api/events");
    expect(res.statusCode).toEqual(200);
    expect(res.body);
  });
});

describe("EVENT GET ITEM _id TEST", () => {
  it("should get _id of item from 1st test result", async () => {
    const res = await request(app).get("/api/events");
    _id = res.body[0]._id;
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]._id);
  });
});

// describe("EVENT PUT ITEM _id TEST", () => {
//   it("should update item of 1st test result", async () => {
//     const res = await request(app).put(`/api/events/${_id}`).send(itemUpdate);
//     expect(res.statusCode).toEqual(200);
//     expect(Object.keys(res.body).sort()).toEqual(expectedKeys.sort());
//   });
// });

describe("EVENT DELETE ONE ITEM ENDPOINT TEST", () => {
  it("should delete 1st test result", async () => {
    const res = await request(app).delete(`/api/events/delete/${_id}`);
    expect(res.statusCode).toEqual(200);
  });
});

describe("EVENT DELETE ALL ITEMS ENDPOINT TEST", () => {
  it("should delete all items", async () => {
    const res = await request(app).delete(`/api/events/delete`);
    expect(res.statusCode).toEqual(200);
  });
});
