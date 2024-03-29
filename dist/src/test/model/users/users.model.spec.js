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
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../../../models/users/UserModel");
const chai_1 = require("chai");
describe("User Model", () => {
    it("should query all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield UserModel_1.User.allUsers();
        (0, chai_1.expect)(users).to.be.an("array");
    }));
    it("should query a user", () => __awaiter(void 0, void 0, void 0, function* () {
        let user = yield UserModel_1.User.userDetail(1);
        (0, chai_1.expect)(user).to.be.an("object");
    }));
});
