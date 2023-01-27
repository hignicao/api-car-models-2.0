import prisma from "../database/db.js";

export function rankingByTrack(track: number) {
	// return connectionDB.query(
	// 	`SELECT track.name as track_name, racer.name as racer_name, car.model as car_model, circuits.time_lap
	// FROM circuits
	// JOIN car
	// ON circuits.car_id = car.id
	// JOIN track
	// ON circuits.track_id = track.id
	// JOIN racer
	// ON circuits.racer_id = racer.id
	// WHERE circuits.track_id = $1
	// ORDER BY circuits.time_lap
	// LIMIT 10`,
	// 	[track]
	// );
	return prisma.circuits.findMany({
		where: { track_id: track },
		orderBy: { time_lap: "asc" },
		take: 10,
		select: {
			track: { select: { name: true } },
			racer: { select: { name: true } },
			car: { select: { model: true } },
			time_lap: true,
		},
	});
}

export function getTrackById(id: number) {
	// return connectionDB.query("SELECT * FROM track WHERE id = $1", [id]);
	return prisma.track.findFirst({
		where: { id },
	});
}
