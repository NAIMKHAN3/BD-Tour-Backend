import { NextFunction, Request, Response } from "express"
import { Booking } from "./booking.model"

export const createBooking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.userId = req.user._id;
        const result = await Booking.create(req.body)
        res.status(201).send({
            status: true,
            message: "Booking Create Done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getBookings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.user._id;
        const result = await Booking.find({ userId }).populate('destinationId');
        res.status(200).send({
            status: true,
            message: "Booking Get Success",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}