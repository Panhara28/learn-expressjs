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
describe("Users Controller", () => {
    it("should return an array of objects", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { username: "panhara" };
        const token = (0, generateToken_1.generateToken)(user);
        const response = yield (0, supertest_1.default)(UserRoutes_1.default)
            .get("/users")
            .set("token", `${token}`);
        (0, chai_1.expect)(response.body).to.an("array");
    }));
    it("should return an array length greater than 0", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { username: "panhara" };
        const token = (0, generateToken_1.generateToken)(user);
        const response = yield (0, supertest_1.default)(UserRoutes_1.default)
            .get("/users")
            .set("token", token);
        (0, chai_1.expect)(response.body.length).to.be.greaterThan(0);
    }));
    it("should return a proper properties", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { username: "panhara" };
        const token = (0, generateToken_1.generateToken)(user);
        const response = yield (0, supertest_1.default)(UserRoutes_1.default)
            .get("/users")
            .set("token", token);
        (0, chai_1.expect)(response.body[0]).to.have.property("id");
        (0, chai_1.expect)(response.body[0]).to.have.property("username");
        (0, chai_1.expect)(response.body[0]).to.have.property("password");
        (0, chai_1.expect)(response.body[0]).to.have.property("fullname");
    }));
    it("should return a single user", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = { username: "panhara" };
        const token = (0, generateToken_1.generateToken)(user);
        const userId = 1;
        const response = yield (0, supertest_1.default)(UserRoutes_1.default)
            .get(`/users/${userId}`)
            .set("token", token);
        (0, chai_1.expect)(response.body).to.an("object");
    }));
    it("should signup user successfully with fullname, username, and password", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {
            fullname: "chhouk tit panhara",
            username: "panhara",
            password: "123",
        };
        const response = yield (0, supertest_1.default)(UserRoutes_1.default).post("/users/signup").send(user);
        (0, chai_1.expect)(response.body.message).to.equal("You have signed up successfully!");
    }));
});
