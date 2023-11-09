import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import uploadRouter from "../module/fileUpload";
import destinationRouter from "../module/destination/destination.index";
import touristSpotRouter from "../module/touristSpot/touristSpot.index";
import bookingRouter from "../module/booking/booking.index";

const router = Router();

router.use('/auth', authRouter);
router.use('/file', uploadRouter);
router.use('/destination', destinationRouter);
router.use('/tourist-spot', touristSpotRouter);
router.use('/booking', bookingRouter);

export default router;