import { Router } from "express";
import { verifyDestination } from "./destination.validation";
import { createDestination, getDestinationById, getDestinations } from "./destination.controller";

const router = Router();

router.post('/create-destination', verifyDestination, createDestination)
router.get('/get-destinations',  getDestinations)
router.get('/get-destination-byid/:id',  getDestinationById)

export default router;