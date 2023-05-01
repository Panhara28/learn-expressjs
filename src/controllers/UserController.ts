import { Request, Response } from "express";
import { knx } from "../connections/knex";

export default async function UserController(req: Request, res: Response) {
  const user = await knx("users")
    .select("*")
    .where({ id: req.params.id })
    .first();
  res.json(user);
}
