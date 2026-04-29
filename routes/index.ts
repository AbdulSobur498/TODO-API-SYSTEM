import { Router } from 'express';
import todoRouter from './todo';
import authRouter from './auth';

const router = Router();

router.use(todoRouter);
router.use(authRouter);

export default router;