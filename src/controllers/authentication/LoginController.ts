import { Request, Response } from "express";
import { knx } from "../../connections/knex";
import bcrypt from "bcrypt";
import { JWT } from "../../data/jwtsecret";
import jwt from "jsonwebtoken";

export default async function LoginController(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const user = await knx("users").select("*").where({ username }).first();
    
    if (!user) {
      res.status(400).send("username doesn`t exited");
    }

    const passwordMatch = await bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      res.status(400).send("password doesn`t exited");
    }

    if (!passwordMatch && !username) {
      res.status(400).send("Invalid username or password");
    }

    const token = jwt.sign({ id: user.id }, JWT);

    res.header("token", token).send(token);
  } catch (err) {
    res.status(401).json({ message: "Invalid authorized" + err });
  }
}
