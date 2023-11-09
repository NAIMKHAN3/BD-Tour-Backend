import { Types } from "mongoose";

export interface IBooking {
    _id?: string;
    name: string;
    email: string;
    phoneNumber: string;
    destinationId: Types.ObjectId;
    userId: Types.ObjectId;
    date: string;
    createdAt?:string;
    updated?:string;
}