import request from "supertest";
import UserRoutes from "../../../routes/users/UserRoutes";
import { expect } from "chai";
import { generateToken } from "../../functions/generateToken";

describe("Users Controller", () => {
  it("should return an array of objects", async () => {
    const user = { username: "panhara" };
    const token = generateToken(user);
    const response = await request(UserRoutes)
      .get("/users")
      .set("token", `${token}`);
    expect(response.body).to.an("array");
  });

  it("should return an array length greater than 0", async () => {
    const user = { username: "panhara" };
    const token = generateToken(user);
    const response = await request(UserRoutes)
      .get("/users")
      .set("token", token);
    expect(response.body.length).to.be.greaterThan(0);
  });

  it("should return a proper properties", async () => {
    const user = { username: "panhara" };
    const token = generateToken(user);
    const response = await request(UserRoutes)
      .get("/users")
      .set("token", token);
    expect(response.body[0]).to.have.property("id");
    expect(response.body[0]).to.have.property("username");
    expect(response.body[0]).to.have.property("password");
    expect(response.body[0]).to.have.property("fullname");
  });

  it("should return a single user", async () => {
    const user = { username: "panhara" };
    const token = generateToken(user);
    const userId = 1;
    const response = await request(UserRoutes)
      .get(`/users/${userId}`)
      .set("token", token);
    expect(response.body).to.an("object");
  });
});
