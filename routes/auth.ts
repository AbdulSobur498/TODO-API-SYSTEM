import { Router } from 'express';
import { registerUser,loginUser } from '../controllers/auth';
import { checkSchema } from 'express-validator';
import { registerUserSchema,loginUserSchema } from '../utils/validationSchema';


const router = Router();
router.route('/api/register').post(checkSchema(registerUserSchema),registerUser);
router.route('/api/login').post(checkSchema(loginUserSchema),loginUser);




export default router;