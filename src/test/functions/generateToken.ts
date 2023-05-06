import jwt from "jsonwebtoken";
import { JWT } from "../../data/jwtsecret";

export function generateToken(user: any) {
  const token = jwt.sign(user, JWT);
  return token;
}
