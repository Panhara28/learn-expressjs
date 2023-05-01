import { Request, Response } from "express";
import { knx } from "../../connections/knex";

export default async function UsersController(req: Request, res: Response) {
  try {
    const users = await knx.select("*").from("users");
    res.json(users);
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
