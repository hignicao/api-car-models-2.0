import prisma from "../database/db.js";

export function findCarById(id: number) {
	return prisma.car.findUnique({
		where: { id },
	});
}
