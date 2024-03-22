import { Request, Response } from 'express'
import crypto from 'crypto';

const db = {
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwLnF2MeMns/98\nXjY1dnr9F4GFKEFWvSolbNv3uKC9B4f3M6NsYmOOdI7/WGQQPTvZF79fSy6tPwir\n+gClnXXa9MMGRS6wRjj9agVwr+28VCdgaDaMFszI0FjI9l7zrhWJkDuCgrs16vHv\nSqmfiSvmN+5D5sxd31MYJnzywuuyReAjYZmZ7dH7+SS4Lp8Pwg6AjYqRprw/bMMk\nPiz9EWT6hTZS5Gyxu27ACXu80wOOnVNWMm+od8DxnQ0R6SCSw/phegxRcdZw1sFp\n8D/HEjGNJxN/CKDqqup6vB9oB7UJELAnxiPS6X4eEXpbbx02KDxL3RS6z5++EfIB\nKA4OR6blAgMBAAECggEAB11Rodqw/6JfDiBUDMUQnA7E+790h78tiVX1FfRSR8SO\nUu+GJ8wvFC/cIGFeAW3F2CvNdJrMbzKA1suDBmlAGXB8zIDM1FKDJFivtIeuHN65\nrKZ+jTmQwt4ur+vYiUAgJ1lvm2OCltzk0xdgYspVmvCAlbcKmOvyacKGG5G5T4DZ\nSQA4rtCQoCpvic+y/dbDS423rUZ8pgPxtz0ep+74GnoEserqQ0XEciuyQJvv6t/l\ns3vqoIk9m9O/hJV7ye8lvheBPpn3FKADgKDi2LNQ4Irzg8jnDc4fqf7vwwT6sAUh\nrowmIAnwOojQvcTNi36aOinRPXAVV5d6QY2HQcCvIQKBgQD3V4vUdJY4jPRDN3c2\nGKrO+BH6I/v6dQkxDwFQYKEcSA8+QTVxGNG19v62YWbBt9dz/sdtAFEgIWVvKR+Q\nrHIUuelTr7QT9GwR4m/Ag1F6ahdaHfIOFULvPagFmZckQGFxApd2HKV5Ux6BZ87V\nF3mp+nA5S2UbsfXUGnSek9jGsQKBgQC2WTiG8/qH7/iewg+Yqqxsx2skfzhKaTHV\nuNVU35GwJhdKWxOP+Yj7pydreoXz69DkZhQMAYvFlCTNNaXggYriOKqfHFM2Wkyt\nUeuLN8a8Si9xusJMfquMBk8Kz+mPnas1pMEYUXn1tBjW+b4n2kOxgTg1WtPOIo3b\nXRKVQGhYdQKBgAbJKhbsE+r9Qv5NGUIsrxL6j1OzhQg8CcKEzN5tqD3kZDarB1JR\nAf/iBN7wESejaY/PH52H8rHU+LlyAWGwuXiEGTioi2I4xHZBJhu7/pJDMtzQEYH9\nZ1a09FUi/5iJA6NcFNeytX98nkuik3QZLsdRDZ8kyGNYIIxvJV/sYnghAoGAXaed\nfNK6ji8WRpPtZr/iJ0yVHv2ob69vxRFVoG3jadFmjO4SMhQ74uSLPoyDWDB57ZTw\nHup8W1InRK6VL6XZKy9nkqj9pCDk2PAGRk6zZ+nCTGtbd+ZnPVfQKQF4OCcG1Fp2\nQoM2XJfPWjqTC+zyb6yqrdykhG8C5PP8o2OdNDECgYEA2v4EK91x2qe/9+eLcT89\nzr3mvHyoOmsgzyOhDhnnB54x800GA+fozFy5sufilF3Yr8UpvA8jtdINHF2Xa2sM\nYEheKBFpMTRuvkKt2YR9MpEt53zv1tmJCA0cZPGGkffP85e80/IvmfuJz+LiPwkW\nKxnxlTJvP6yOXn7yS54z3OM=\n-----END PRIVATE KEY-----\n",
    publicKey: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsC5xdjHjJ7P/fF42NXZ6\n/ReBhShBVr0qJWzb97igvQeH9zOjbGJjjnSO/1hkED072Re/X0surT8Iq/oApZ11\n2vTDBkUusEY4/WoFcK/tvFQnYGg2jBbMyNBYyPZe864ViZA7goK7Nerx70qpn4kr\n5jfuQ+bMXd9TGCZ88sLrskXgI2GZme3R+/kkuC6fD8IOgI2Kkaa8P2zDJD4s/RFk\n+oU2UuRssbtuwAl7vNMDjp1TVjJvqHfA8Z0NEekgksP6YXoMUXHWcNbBafA/xxIx\njScTfwig6qrqerwfaAe1CRCwJ8Yj0ul+HhF6W28dNig8S90Uus+fvhHyASgODkem\n5QIDAQAB\n-----END PUBLIC KEY-----\n",
    signature: "a062fb20ab6488a95b59fb1e69f1ed7591af3b23448a6bb661c545486c3ca87945308fdf3ce0e9c259042fa97dafc59536b52b5c1873c3af78596d0e6fc4f0a0f17d1c0c0c396613772f88abd66bb1dab875a8b62d730a27c18179d53820e9cabe0b614071278ccf6fdc182aea8cb62bee6b7080c1142c7997f4f61ce03e98c1e4d2e1328c8ed887dc0ac6eed64d88c95d7da88953b45f6e721ffc8b873caae7788ca01048044ef9adf2daed6ac439351e31f6ca4b576cb56b3766d4cfdd42765bf6b7b8247c50dfa0ff9fe0ac9508e65b36afa1253b66ebb4c77803a8571666881cc6b242319123e3e40e84e44581bb4ba6e400e4c3635b04c5234d22bdc691",
    "message": true
}


export default function DigitalSignatureController(req: Request, res: Response) {
    const data = 'This is a notice of security interest with a timestamp.';

    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048, // Key size
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });

    const signer = crypto.createSign('SHA256');
    signer.update(data);
    signer.end();

    const signature = signer.sign(privateKey, 'hex');

    const verifier = crypto.createVerify('SHA256');
    verifier.update(data);
    verifier.end();

    const isValid = verifier.verify(publicKey, signature, 'hex');

    console.log('Signature Valid:', isValid);

    res.json({ privateKey, publicKey, signature, message: isValid })
}