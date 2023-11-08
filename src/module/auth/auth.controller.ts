import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt'
import { User } from "./auth.model";

export const createRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashedPassword;
        console.log(req.body)
        const result = await User.create(req.body);
        res.status(201).send({
            status: true,
            message: "Register Success Done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}