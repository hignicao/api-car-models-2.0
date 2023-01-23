import joi from "joi";

export const circuitSchema = joi.object({
  racer: joi.number().required(),
  car: joi.number().required(),
  track: joi.number().required(),
  time: joi.number().required(),
});