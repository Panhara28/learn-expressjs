import crypto from "crypto";
// Generate a key pair (private and public key)
export async function generateKeyPair() {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });

  return { privateKey, publicKey };
}

// Sign a message using the private key
export async function signMessage(privateKey: string, message: string) {
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(message);
  const signature = sign.sign(privateKey, "base64");
  return signature;
}

// Verify the signature using the public key
export async function verifySignature(
  publicKey: string,
  message: string,
  signature: string
) {
  try {
    console.log(publicKey);
    const verify = crypto.createVerify("RSA-SHA256");
    verify.update(message);
    const isSignatureValid = verify.verify(publicKey, signature, "base64");
    return isSignatureValid;
  } catch (error) {
    console.error("Error occurred while verifying signature:", error);
    return false;
  }
}

// Usage example
// async function example() {
//   const keyPair = await generateKeyPair();

//   const privateKey = keyPair.privateKey;
//   const publicKey = keyPair.publicKey;

//   const message = "Hello, world!";
//   const signature = await signMessage(privateKey, message);

//   console.log("Signature:", signature);

//   const isValid = await verifySignature(publicKey, message, signature);
//   console.log("Is signature valid?", isValid);
// }

// example();
