import { Racer } from "../utils/protocols.js";
import prisma from "../database/db.js";

export function getRacersByNumber(number: number) {
	// return connectionDB.query("SELECT * FROM racer WHERE number = $1", [number]);
	return prisma.racer.findUnique({
		where: { number },
	});
}

export function getRacerById(id: number) {
	// return connectionDB.query("SELECT * FROM racer WHERE id = $1", [id]);
	return prisma.racer.findFirst({
		where: { id },
	});
}

export function postRacer(racer: Racer) {
	// return connectionDB.query("INSERT INTO racer (name, birth, number) VALUES ($1, $2, $3)", [racer.name, racer.birth, racer.number]);
	return prisma.racer.create({
		data: racer,
	});
}

export function updateNumber(id: number, number: number) {
	// return connectionDB.query("UPDATE racer SET number = $1 WHERE id = $2", [number, id]);
	return prisma.racer.update({
		data: {
			number: number,
		},
		where: { id },
	});
}

export function getRaces(id: number) {
	return prisma.racer.findFirst({
		where: { id },
		select: {
			races: true,
		}
	})
}

export function updateRaces(id: number, races: number) {
	return prisma.racer.update({
		data: {
			races: races + 1,
		},
		where: { id },
	})
}