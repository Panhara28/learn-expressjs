import { Request, Response } from "express";
import { User } from "../../models/users/UserModel";

export default async function UsersController(req: Request, res: Response) {
  try {
    const users = await User.allUsers();
    res.json(users);
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
