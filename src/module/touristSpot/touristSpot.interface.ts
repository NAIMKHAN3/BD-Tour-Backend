import { Types } from "mongoose";

export interface ITouristSpot {
    _id?:string;
    name: string;
    description: string;
    image:string;
    destinationId: Types.ObjectId;
    createdAt:string;
    updatedAt:string;
}