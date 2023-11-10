import { Router } from "express";
import { verifyTouristSpot } from "./touristSpot.validation";
import { createTouristSpot, getAllTouristSpot, getTouristSpot } from "./touristSpot.controller";

const router = Router();

router.post('/create-tourist-spot', verifyTouristSpot, createTouristSpot);
router.get('/get-tourist-spots/:id',  getTouristSpot);
router.get('/get-tourist-spots',  getAllTouristSpot);

export default router;