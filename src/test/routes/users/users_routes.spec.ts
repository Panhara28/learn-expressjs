import request from "supertest";
import UserRoutes from "../../../routes/UserRoutes";
import { expect } from "chai";

describe("GET /users", () => {
  it("should return 200 OK", async () => {
    const response = await request(UserRoutes).get("/users");
    expect(response.status).to.equal(200);
  });
});

describe("GET /users/:id", () => {
  it("should return 200 OK", async () => {
    const userId: number = 1;
    const response = await request(UserRoutes).get(`/users/${userId}`);
    expect(response.status).to.equal(200);
  });
});
