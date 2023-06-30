"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../../controllers/users/UserController"));
const UsersController_1 = __importDefault(require("../../controllers/users/UsersController"));
const jwt_1 = __importDefault(require("../../middlewares/jwt"));
const SignupController_1 = __importDefault(require("../../controllers/users/SignupController"));
const router = (0, express_1.default)();
router.get("/users", jwt_1.default, UsersController_1.default);
router.get("/users/:id", UserController_1.default);
router.post("/users/signup", SignupController_1.default);
module.exports = router;
