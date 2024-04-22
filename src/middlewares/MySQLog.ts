import { knx } from "../connections/knex";
import Logging from "../libs/Logging";
import {NextFunction, Request, Response} from 'express';

export default async function MySQLog(req: Request, res: Response, next: NextFunction){
    await knx.on('query', (queryData) => {
        Logging.mysql_log(`[Query: ${queryData.sql}]-[Method: ${queryData.method.toUpperCase()}]`);
    })
    next()
}