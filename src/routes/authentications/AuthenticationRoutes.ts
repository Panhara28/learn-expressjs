import express from "express";
import LoginController from "../../controllers/authentication/LoginController";

const router = express();

router.post("/login", LoginController);

export = router;
