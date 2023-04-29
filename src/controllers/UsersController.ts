import { Request, Response } from "express";

export default function UsersController(req: Request, res: Response) {
  res.json({ name: "John" });
}
