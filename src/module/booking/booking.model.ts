import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    destinationId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Destination'
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Destination'
    },
    date: {
        type: String,
        required: true
    },


}, {timestamps: true})

export const Booking = model<IBooking>('Booking', bookingSchema);