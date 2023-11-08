import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import uploadRouter from "../module/fileUpload";
import destinationRouter from "../module/destination/destination.index";

const router = Router();

router.use('/auth', authRouter);
router.use('/file', uploadRouter);
router.use('/destination', destinationRouter);

export default router;