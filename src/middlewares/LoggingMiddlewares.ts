import Logging from "../libs/Logging";
import next, {NextFunction, Request, Response} from 'express';

export default function LoggingMiddleman(req: Request, res: Response, next: NextFunction){
    Logging.route(`${req.method} ${req.path}`);
    next();
}
