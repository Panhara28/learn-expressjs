import { User } from "../../../models/users/UserModel";
import { expect } from "chai";

describe("User Model", () => {
  it("should query all users", async () => {
    const users = await User.allUsers();
    expect(users).to.be.an("array");
  });

  it("should query a user", async () => {
    let user: any = await User.userDetail(1);
    expect(user).to.be.an("object");
  });
});
