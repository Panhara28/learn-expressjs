import express from "express";
import UserController from "../../controllers/users/UserController";
import UsersController from "../../controllers/users/UsersController";
import AuthMiddleware from "../../middlewares/jwt";

const router = express();

router.get("/users", AuthMiddleware, UsersController);
router.get("/users/:id", UserController);

export = router;
