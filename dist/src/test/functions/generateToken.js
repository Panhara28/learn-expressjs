"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtsecret_1 = require("../../data/jwtsecret");
function generateToken(user) {
    const token = jsonwebtoken_1.default.sign(user, jwtsecret_1.JWT);
    return token;
}
exports.generateToken = generateToken;
