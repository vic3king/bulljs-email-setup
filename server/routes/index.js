import express from 'express';

// auth Routes
import authRoute from './auth.routes';

// express router
const router = express.Router();

router.use('/auth', authRoute);

export default router;
