import express  from 'express';
import UserControllers from '../../controllers/UserControllers';

const router = express();

router.get('/users', UserControllers)

export = router;