import request from "supertest";
import UserRoutes from "../../../routes/UserRoutes";
import { expect } from "chai";

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const response = await request(UserRoutes).get("/users");
    expect(response.status).to.equal(200);
  });
});
