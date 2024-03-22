import { Request, Response } from "express";
import QRCode from "qrcode";
export async function DocumentCreateController(req: Request, res: Response) {
  const qrCodeData = `https://localhost:8080/api/digital-signature/verify`;
  QRCode.toDataURL(qrCodeData, function (err: any, url: string) {
    console.log(url);
  });
  res.json({ message: "hello world" });
}
