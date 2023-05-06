import request from "supertest";
import UserRoutes from "../../../routes/users/UserRoutes";
import { expect } from "chai";
import { generateToken } from "../../functions/generateToken";

describe("GET /users", () => {
  it("should return 200 OK", async () => {
    const user = { username: "panhara" };
    const token = generateToken(user);
    const response = await request(UserRoutes)
      .get("/users")
      .set("token", token);
    expect(response.status).to.equal(200);
  });
});

describe("GET /users/:id", () => {
  it("should return 200 OK", async () => {
    const user = { username: "panhara" };
    const token = generateToken(user);
    const userId: number = 1;
    const response = await request(UserRoutes)
      .get(`/users/${userId}`)
      .set("token", token);
    expect(response.status).to.equal(200);
  });
});
