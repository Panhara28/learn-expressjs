import express from "express";
import UsersController from "../../controllers/users/UsersController";
import AuthMiddleware from "../../middlewares/jwt";
import DigitalSignatureSignController from "../../controllers/digital-signature/DigitalSignatureSignController";
import DigitalSignatureVerifyController from "../../controllers/digital-signature/DigitalSignatureVerifyController";

const router = express();

router.post("/digital-signature/sign", DigitalSignatureSignController);
router.post("/digital-signature/verify", DigitalSignatureVerifyController);

export = router;
