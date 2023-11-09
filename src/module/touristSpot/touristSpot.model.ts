import { Schema, model } from "mongoose";
import { ITouristSpot } from "./touristSpot.interface";

const touristSpotSchema = new Schema<ITouristSpot>({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    destinationId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Destination'
    },

}, {timestamps: true})

export const TouristSpot = model<ITouristSpot>('Tourist-Spot', touristSpotSchema);