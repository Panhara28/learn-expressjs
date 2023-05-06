"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("../../middlewares/jwt"));
const chai_1 = require("chai");
describe("Middleware", () => {
    it("should return 401 if token is not provided", () => {
        const req = { header: () => undefined };
        const res = {
            status: (code) => ({
                send: (msg) => {
                    (0, chai_1.expect)(code).to.equal(401);
                    (0, chai_1.expect)(msg).to.equal("Access Denied");
                },
            }),
        };
        const next = () => { };
        (0, jwt_1.default)(req, res, next);
    });
    it("should return 400 if token is invalid", () => {
        const req = { header: () => "invalid-token" };
        const res = {
            status: (code) => ({
                send: (msg) => {
                    (0, chai_1.expect)(code).to.equal(400);
                    (0, chai_1.expect)(msg).to.equal("Invalid Token");
                },
            }),
        };
        const next = () => { };
        (0, jwt_1.default)(req, res, next);
    });
});
