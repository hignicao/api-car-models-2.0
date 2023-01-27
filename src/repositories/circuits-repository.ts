import { Circuit } from "../utils/protocols.js";
import prisma from "../database/db.js";

export function postCircuit(circuit: Circuit) {
	return prisma.circuits.create({
		data: circuit,
	});
}

export function deleteCircuit(id: number) {
	return prisma.circuits.delete({
		where: { id },
	});
}
