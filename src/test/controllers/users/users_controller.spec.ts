import request from "supertest";
import UserRoutes from "../../../routes/UserRoutes";
import { expect } from "chai";

describe("should return a list of the users", () => {
  it("should return an array of objects", async () => {
    const response = await request(UserRoutes).get("/users");
    expect(response.body).to.an("array");
  });

  it("should return an array length greater than 0", async () => {
    const response = await request(UserRoutes).get("/users");
    expect(response.body.length).to.be.greaterThan(0);
  });

  it("should return a proper properties", async () => {
    const response = await request(UserRoutes).get("/users");
    expect(response.body[0]).to.have.property("id");
    expect(response.body[0]).to.have.property("username");
    expect(response.body[0]).to.have.property("password");
    expect(response.body[0]).to.have.property("fullname");
  });
});

describe("should return a detail of the user", () => {
  it("should return a single user", async () => {
    const userId = 1;
    const response = await request(UserRoutes).get(`/users/${userId}`);
    expect(response.body).to.an("object");
  });
});
