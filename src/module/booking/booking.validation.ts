import {Joi, validate} from 'express-validation';
const validationBooking = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phoneNumber: Joi.string().required().min(11).max(11),
        destinationId: Joi.string().required(),
        date: Joi.string().required(),
    })
}

export const  verifyBooking = validate(validationBooking,{},{})