import { getRacerById, getRacersByNumber, postRacer, updateNumber } from "../repositories/racers-repository.js";
import { racerSchema } from "../schemas/racer-schema.js";
import { Racer } from "../utils/protocols";

async function validadeRacerBody(racer: Racer) {
	const { error } = racerSchema.validate(racer, { abortEarly: false });

	if (error) {
		const errors = error.details.map((err) => err.message);
		throw new Error(errors.join(", "));
	}
}

async function validadeRacerNumber(racerNumber: number) {
	const racerExists = await getRacersByNumber(racerNumber);
	if (racerExists.rowCount > 0) {
		throw new Error("Número de corredor já cadastrado");
	}
}

async function registerRacer(racer: Racer) {
	try {
		await postRacer(racer);
	} catch (error) {
		throw new Error("Erro ao cadastrar corredor");
	}
}

async function updateRacerNumber(id: string, number: number) {
  try {
    await updateNumber(id, number);
  } catch (error) {
    throw new Error("Erro ao atualizar número do corredor");
  }
}

async function findRacer(id: number) {
	const racerExists = await getRacerById(id)
  if (racerExists.rowCount === 0) {
    throw new Error("Piloto não encontrado");
  }
}

const racerService = {
	validadeRacerNumber,
	validadeRacerBody,
	registerRacer,
  updateRacerNumber,
	findRacer,
};

export default racerService;
