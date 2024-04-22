import {Response, Request} from 'express';
import { knx } from '../../connections/knex';

export default async function UserControllers(req: Request, res: Response){
    const users = await knx.table('users');
    res.json({users})
}