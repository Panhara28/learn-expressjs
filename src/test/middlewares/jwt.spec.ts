import AuthMiddleware from "../../middlewares/jwt";
import { expect } from "chai";

describe("Middleware", () => {
  it("should return 401 if token is not provided", () => {
    const req: any = { header: () => undefined };
    const res: any = {
      status: (code: number) => ({
        send: (msg: string) => {
          expect(code).to.equal(401);
          expect(msg).to.equal("Access Denied");
        },
      }),
    };
    const next: any = () => {};
    AuthMiddleware(req, res, next);
  });

  it("should return 400 if token is invalid", () => {
    const req: any = { header: () => "invalid-token" };
    const res: any = {
      status: (code: number) => ({
        send: (msg: string) => {
          expect(code).to.equal(400);
          expect(msg).to.equal("Invalid Token");
        },
      }),
    };
    const next: any = () => {};
    AuthMiddleware(req, res, next);
  });
});
