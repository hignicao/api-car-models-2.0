import joi from "joi";

export const circuitSchema = joi.object({
  racer_id: joi.number().required(),
  car_id: joi.number().required(),
  track_id: joi.number().required(),
  time_lap: joi.number().required(),
});