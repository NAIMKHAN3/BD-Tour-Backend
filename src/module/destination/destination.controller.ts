import { NextFunction, Request, Response } from "express";
import { Destination } from "./destination.model";

export const createDestination = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Destination.create(req.body)
        res.status(201).send({
            status: true,
            message: "Destination Create Done",
            data: result
        })
    }
    catch (err) {
next(err)
    }
}
export const getDestinations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Destination.find();
        res.status(200).send({
            status: true,
            message: "Destination Get Success",
            data: result
        })
    }
    catch (err) {
next(err)
    }
}
export const getDestinationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result = await Destination.findById(id)
        res.status(200).send({
            status: true,
            message: "Destination Get Success",
            data: result
        })
    }
    catch (err) {
next(err)
    }
}