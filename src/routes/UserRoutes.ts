import express from "express";
import UsersController from "../controllers/UsersController";

const router = express();

router.get("/users", UsersController);

export = router;
