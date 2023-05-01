import express from "express";
import UsersController from "../controllers/UsersController";
import UserController from "../controllers/UserController";

const router = express();

router.get("/users", UsersController);
router.get("/users/:id", UserController);
export = router;
