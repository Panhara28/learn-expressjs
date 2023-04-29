import express, { Request, Response } from "express";
import Logging from "./libs/Logging";
import UserRoutes from "./routes/UserRoutes";

const port = process.env.PORT ? process.env.PORT : 8080;
const router = express();

const StartApplication = () => {
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  router.get("/users", UserRoutes);

  router.listen(port, () => Logging.info(`Server is running on port ${port}`));
};

StartApplication();
