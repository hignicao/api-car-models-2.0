import prisma from "../src/database/db.js";

async function main() {
	await prisma.circuits.createMany({
		data: [
			{
				track_id: 3,
				racer_id: 4,
				car_id: 1,
				time_lap: 160,
			},
			{
				track_id: 2,
				racer_id: 1,
				car_id: 3,
				time_lap: 100,
			},
			{
				track_id: 2,
				racer_id: 2,
				car_id: 1,
				time_lap: 60,
			},
		],
	});
}

main()
	.then(() => {
		console.log("Seeding completed");
	})
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
