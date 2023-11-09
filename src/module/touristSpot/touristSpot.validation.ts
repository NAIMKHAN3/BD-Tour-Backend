import {Joi, validate} from 'express-validation'
const touristSpotValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
        destinationId: Joi.string().required(),
    })
}

export const verifyTouristSpot = validate(touristSpotValidation,{},{})