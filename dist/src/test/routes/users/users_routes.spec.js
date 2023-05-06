"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const UserRoutes_1 = __importDefault(require("../../../routes/users/UserRoutes"));
const chai_1 = require("chai");
const generateToken_1 = require("../../functions/generateToken");
describe("GET /users", () => {
    it("should return 200 OK", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { username: "panhara" };
        const token = (0, generateToken_1.generateToken)(user);
        const response = yield (0, supertest_1.default)(UserRoutes_1.default)
            .get("/users")
            .set("token", token);
        (0, chai_1.expect)(response.status).to.equal(200);
    }));
});
describe("GET /users/:id", () => {
    it("should return 200 OK", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { username: "panhara" };
        const token = (0, generateToken_1.generateToken)(user);
        const userId = 1;
        const response = yield (0, supertest_1.default)(UserRoutes_1.default)
            .get(`/users/${userId}`)
            .set("token", token);
        (0, chai_1.expect)(response.status).to.equal(200);
    }));
});
