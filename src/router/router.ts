import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import uploadRouter from "../module/fileUpload";

const router = Router();

router.use('/auth', authRouter);
router.use('/file', uploadRouter);

export default router;