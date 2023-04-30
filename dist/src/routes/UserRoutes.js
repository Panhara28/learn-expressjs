"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const router = (0, express_1.default)();
router.get("/users", UsersController_1.default);
module.exports = router;
