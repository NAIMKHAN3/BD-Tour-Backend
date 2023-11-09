import { Router } from "express";
import { verifyTouristSpot } from "./touristSpot.validation";
import { createTouristSpot, getTouristSpot } from "./touristSpot.controller";

const router = Router();

router.post('/create-tourist-spot', verifyTouristSpot, createTouristSpot);
router.get('/get-tourist-spot/:id',  getTouristSpot);

export default router;