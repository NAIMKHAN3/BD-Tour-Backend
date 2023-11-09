import { NextFunction, Request, Response } from "express"
import { TouristSpot } from "./touristSpot.model"

export const createTouristSpot = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await TouristSpot.create(req.body)
        res.status(201).send({
            status: true,
            message: "Tourist Spot Create Done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getTouristSpot = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const destinationId = req.params.id;
        const result = await TouristSpot.find({ destinationId }).populate('destinationId');
        res.status(200).send({
            status: true,
            message: "Tourist Spot Get Success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}