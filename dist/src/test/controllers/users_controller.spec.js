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
const UserRoutes_1 = __importDefault(require("../../routes/UserRoutes"));
const chai_1 = require("chai");
describe("should return a list of the users", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, supertest_1.default)(UserRoutes_1.default).get("/users");
    it("should return an array of objects", () => {
        (0, chai_1.expect)(response.body).to.an("array");
    });
    it("should return an array length greater than 0", () => {
        (0, chai_1.expect)(response.body.length).to.be.greaterThan(0);
    });
}));
describe("should return a detail of the user", () => {
    it("should return a single user", () => __awaiter(void 0, void 0, void 0, function* () {
        const userId = 1;
        const response = yield (0, supertest_1.default)(UserRoutes_1.default).get(`/users/${userId}`);
        (0, chai_1.expect)(response.body).to.an("object");
    }));
});
