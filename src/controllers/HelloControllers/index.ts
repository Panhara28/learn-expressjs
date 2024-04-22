import {Request, Response} from 'express';

export default async function HelloControllers(req: Request, res: Response){
    res.json({message: "Hello!"})
    res.status(200);
}