import { Request, Response } from "express";
import {
  generateKeyPair,
  signMessage,
  verifySignature,
} from "../../functions/Rsa";

export default async function DigitalSignatureSignController(
  req: Request,
  res: Response
) {
  const keyPair = await generateKeyPair();
  const privateKey = keyPair.privateKey;
  const publicKey = keyPair.publicKey;

  const message = `{ id: 1, username: "panhara" }`;
  const signature = await signMessage(privateKey, message);
  const isValid = await verifySignature(publicKey, message, signature);
  res.json({ signature, publicKey, isValid });
}
