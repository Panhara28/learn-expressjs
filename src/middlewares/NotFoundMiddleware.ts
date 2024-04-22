import { NextFunction, Request, Response } from "express";
import Logging from "../libs/Logging";

export default function NotFoundMiddlewares(req: Request, res: Response, next: NextFunction){
    const error = new Error(`404 Not Found ${req.originalUrl}`);
    res.status(404);
    Logging.not_found(error.message);
    next();
}