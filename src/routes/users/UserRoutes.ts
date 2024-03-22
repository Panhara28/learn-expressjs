import express from "express";
import UserController from "../../controllers/users/UserController";
import UsersController from "../../controllers/users/UsersController";
import AuthMiddleware from "../../middlewares/jwt";
import SignupController from "../../controllers/users/SignupController";

const router = express();

router.get("/users", AuthMiddleware, UsersController);
router.get("/users/:id", UserController);
router.post("/users/signup", SignupController);

export = router;
