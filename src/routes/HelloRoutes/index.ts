import express from 'express';
import HelloControllers from '../../controllers/HelloControllers';

const router = express()

router.get('/hello', HelloControllers)

export = router;