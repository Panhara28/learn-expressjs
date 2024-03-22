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
const knex_1 = require("../../connections/knex");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwtsecret_1 = require("../../data/jwtsecret");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function LoginController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password } = req.body;
            const user = yield (0, knex_1.knx)("users").select("*").where({ username }).first();
            if (!user) {
                res.status(400).send("username doesn`t exited");
            }
            const passwordMatch = yield bcrypt_1.default.compareSync(password, user.password);
            if (!passwordMatch) {
                res.status(400).send("password doesn`t exited");
            }
            if (!passwordMatch && !username) {
                res.status(400).send("Invalid username or password");
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id }, jwtsecret_1.JWT);
            res.header("token", token).send(token);
        }
        catch (err) {
            res.status(401).json({ message: "Invalid authorized" + err });
        }
    });
}
exports.default = LoginController;
