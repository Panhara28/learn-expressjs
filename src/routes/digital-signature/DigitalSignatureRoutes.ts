import express from "express";
import UsersController from "../../controllers/users/UsersController";
import AuthMiddleware from "../../middlewares/jwt";
import DigitalSignatureSignController from "../../controllers/digital-signature/DigitalSignatureSignController";

const router = express();

router.post("/digital-signature/sign", DigitalSignatureSignController);
router.get("/digital-signature/verify", AuthMiddleware, UsersController);

export = router;
