import express from "express";
import Logging from "./libs/Logging";
import DigitalSignatureRoute from "./routes/DigitalSignatureRoute";

const port = process.env.PORT ? process.env.PORT : 8080;
const router = express();

const StartApplication = () => {
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());
  // Defined Route
  router.use('/api', DigitalSignatureRoute);
  router.listen(port, () => Logging.info(`Server is running on port ${port}`));
};

StartApplication();
