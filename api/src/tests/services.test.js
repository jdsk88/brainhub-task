import mongoose from "mongoose";
import { env } from "../../../setupEnv";
import { EventRouteHandlers } from "../services/event";
import { items, itemUpdate } from "./initialState";

let _id;
let count;
beforeAll(async () => {
  await mongoose.connect(env.MONGO_DB);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Save Initial State to events collection db", () => {
  it("should create initial state of db", async () => {
    const res = await EventRouteHandlers.initialState(items);
    expect(items);
    expect((res.length = 4));
  });
});

describe("Find objects in events collection", () => {
  it("should find array of objects or empty array", async () => {
    const res = await EventRouteHandlers.getAll();
    // set _id of first object to handle next tests
    _id = res[0]._id;
    expect(res.length <= 0);
  });
});

describe("Find one object in events collection", () => {
  it("should find one by _id first obcject events collection", async () => {
    const res = await EventRouteHandlers.getOne(_id);
    expect(res._id);
  });
});

describe("Update one object in events collection", () => {
  it("should update one object of  events collection", async () => {
    await EventRouteHandlers.updateOne(_id, itemUpdate);
    expect({
      acknowledged: true,
      modifiedCount: 1,
      upsertedId: null,
      upsertedCount: 0,
      matchedCount: 1,
    });
  });
});

describe("Delete one object in events collection", () => {
  it("should delete one object of events collection", async () => {
    await EventRouteHandlers.deleteOne(_id);
    expect({ deletedCount: 1 });
  });
});

describe("Count objects in events collection", () => {
  it("should count objects inside evenst collection", async () => {
    const res = await EventRouteHandlers.getAll();
    // set length of events collection to hadle last test
    count = res.length;
    expect(res.length <= 0);
  });
});

describe("Delete all objects in events collection", () => {
  it("should delete all objects of events collection", async () => {
    await EventRouteHandlers.deleteAll();
    expect({ deletedCount: count });
  });
});
