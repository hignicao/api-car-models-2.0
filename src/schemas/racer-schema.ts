import joi from "joi";

export const racerSchema = joi.object({
	name: joi.string().required(),
	birth: joi.date().required(),
  number: joi.number().required(),
});
