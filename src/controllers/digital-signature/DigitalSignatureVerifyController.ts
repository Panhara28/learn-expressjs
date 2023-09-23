import { Request, Response } from "express";
import { verifySignature } from "../../functions/Rsa";

export default async function DigitalSignatureVerifyController(
  req: Request,
  res: Response
) {
  console.log(req.body.message);
  // const { publicKey, signature, message } = req.body;
  // const isValid = await verifySignature(publicKey, message, signature);
  // res.json({ isValid });
}
