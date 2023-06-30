import { Request, Response } from "express";

export default async function SignupController(req: Request, res: Response) {
  res.json({ message: "You have signed up successfully!" });
}
