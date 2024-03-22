import { Request, Response } from "express";
import { signMessage, verifySignature } from "../../functions/Rsa";

export default async function DigitalSignatureVerifyController(
  req: Request,
  res: Response
) {
  const { publicKey, signature } = req.body;
  const message = req.body.message;

  const isValid = await verifySignature(publicKey, message, signature);

  res.json({ isValid });
}
