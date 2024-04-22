import {Request, Response} from 'express';
import { knx } from '../../connections/knex';
import knex from 'knex';

export default async function HelloControllers(req: Request, res: Response){
    const result = await knx.table('users');
    res.json({message: "Hello!", result})
    res.status(200);
}