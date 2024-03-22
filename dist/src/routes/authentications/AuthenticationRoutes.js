"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const LoginController_1 = __importDefault(require("../../controllers/authentication/LoginController"));
const router = (0, express_1.default)();
router.post("/login", LoginController_1.default);
module.exports = router;
