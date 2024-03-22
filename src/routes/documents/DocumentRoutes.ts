import express from "express";
import { DocumentCreateController } from "../../controllers/documents/DocumentCreateController";

const router = express();

router.post("/documents/create", DocumentCreateController);

export = router;
