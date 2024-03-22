import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT } from "../data/jwtsecret";

interface IRequest extends Request {
  user?: { username: string };
}

export default function AuthMiddleware(
  req: IRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.header("token");

  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, JWT, { maxAge: "20s" }) as {
      username: string;
    };
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}
