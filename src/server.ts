import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import Logging from "./libs/Logging";
import HelloRoutes from "./routes/HelloRoutes";
import LoggingMiddleman from "./middlewares/LoggingMiddlewares";
import NotFoundMiddlewares from "./middlewares/NotFoundMiddleware";

const port = process.env.PORT ? process.env.PORT : 8080;
const router = express();

const StartApplication = () => {
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());
  // Route Registry
  router.use(LoggingMiddleman);
  router.use('/api', HelloRoutes);
  router.use(NotFoundMiddlewares);
  router.listen(port, () => Logging.info(`Server is running on port ${port}`));
};

StartApplication();
