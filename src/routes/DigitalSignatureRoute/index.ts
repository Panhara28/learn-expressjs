import express from 'express';
import DigitalSignatureController from '../../controllers/DigitalSignatureController';

const router = express();

router.get('/digital-signature', DigitalSignatureController);

export = router;