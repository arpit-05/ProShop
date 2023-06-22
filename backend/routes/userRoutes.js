import { getUser } from "../Controllers/useControllers.js"; 
import express from 'express';
const router=express.Router()

router.route('/login').post(getUser)
export default router;
