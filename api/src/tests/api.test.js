import request from "supertest";
import { app } from "../index";
// console.log(process.env.HOST);
const expectedKeys = [
  "__v",
  "_id",
  "email",
  "eventDate",
  "firstName",
  "lastName",
];

describe("EVENT POST ENDPOINT TEST", () => {
  it("should create a new post", async () => {
    const res = await request(app).post("/api/events/create").send({
      firstName: "Maciek",
      lastName: "Jakobszy",
      email: "jdsk88@gmail.com",
      eventDate: 1646733780000,
    });
    expect(res.statusCode).toEqual(200);
    expect(Object.keys(res.body).sort()).toEqual(expectedKeys.sort());
  });
});
