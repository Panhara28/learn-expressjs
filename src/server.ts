import express, { NextFunction, Request, Response } from "express";
import Logging from "./libs/Logging";

const port = process.env.PORT ? process.env.PORT : 8080;
const router = express();

const StartApplication = () => {
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  // Middleware function that logs the incomming request URL
  router.use((req: Request, res: Response, next: NextFunction) => {
    Logging.info(`Incoming request URL: ${req.url}`);
    next();
  });

  // Middleware function that sets a custom response header
  router.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("X-Custom-Header", "Hello, world!");
    next();
  });

  // Route handler for GET /example
  router.get("/example", (req: Request, res: Response) => {
    res.send("This is and example route");
  });

  router.listen(port, () => Logging.info(`Server is running on port ${port}`));
};

StartApplication();
