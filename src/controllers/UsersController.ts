import { Request, Response } from "express";
import { knx } from "../connections/knex";

export default async function UsersController(req: Request, res: Response) {
  const users = await knx.select("*").from("users");
  res.json(users);
}
