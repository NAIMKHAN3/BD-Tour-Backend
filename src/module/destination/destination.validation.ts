import {Joi, validate} from 'express-validation'
const destinationValidation = {
    body: Joi.object({
        name: Joi.string().required()
    })
}

export const verifyDestination = validate(destinationValidation,{},{})