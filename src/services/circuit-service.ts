import { deleteCircuit, postCircuit } from "../repositories/circuits-repository.js";
import { circuitSchema } from "../schemas/circuit-schema.js";
import { Circuit } from "../utils/protocols.js";

async function postNewCircuit(circuit: Circuit) {
  try {
		await postCircuit(circuit);
	} catch (error) {
		throw new Error("Erro ao cadastrar corrida");
	}
}

async function validateCircuitBody(circuit: Circuit) {
  const { error } = circuitSchema.validate(circuit, { abortEarly: false });

	if (error) {
		const errors = error.details.map((err) => err.message);
		throw new Error(errors.join(", "));
	}
}

async function deleteCircuitById(id: string) {
	try {
		await deleteCircuit(id);
	} catch (error) {
		throw new Error("Erro ao deletar corrida");
	}
}

const circuitService = {
  postNewCircuit,
  validateCircuitBody,
	deleteCircuitById,
};

export default circuitService;