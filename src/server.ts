import express, { Request, Response } from "express";
import Logging from "./libs/Logging";
import UserRoutes from "./routes/users/UserRoutes";
import AuthenticationRoutes from "./routes/authentications/AuthenticationRoutes";

const port = process.env.PORT ? process.env.PORT : 8080;
const router = express();

const StartApplication = () => {
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());
  router.use("/auth", AuthenticationRoutes);
  router.use("/api", UserRoutes);

  router.listen(port, () => Logging.info(`Server is running on port ${port}`));
};

StartApplication();
