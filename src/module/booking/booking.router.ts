import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyBooking } from "./booking.validation";
import { createBooking, getBookings } from "./booking.controller";

const router = Router();

router.post('/create-booking', verifyJwt, verifyBooking, createBooking)
router.get('/get-bookings', verifyJwt, getBookings)

export default router;