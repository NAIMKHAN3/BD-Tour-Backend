import { Router } from "express";
import { verifyRegistration } from "./auth.validation";
import { createRegister } from "./auth.controller";

const router = Router();

router.post('/register', verifyRegistration, createRegister)

export default router;