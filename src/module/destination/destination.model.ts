import { Schema, model } from "mongoose";
import { IDestination } from "./destination.interface";

const destinationSchema = new Schema<IDestination>({
    name: {
        type: String,
        required: true
    },
}, {timestamps: true})

export const Destination = model<IDestination>('Destination', destinationSchema);