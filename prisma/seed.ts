import prisma from "../src/database/db.js";

async function main() {
	await prisma.track.createMany({
		data: [
			{
				name: "Interlagos",
			},
			{
				name: "Nurburgring",
			},
			{
				name: "Monaco",
			},
		],
	});

	await prisma.car.createMany({
		data: [
			{
				model: "Honda NSX",
				year: 1992,
				color: "Red",
				engine: "V6",
				hp: 220,
			},
			{
				model: "Toyota Supra",
				year: 1995,
				color: "Black",
				engine: "I6",
				hp: 380,
			},
			{
				model: "Mazda RX-7",
				year: 1999,
				color: "Yellow",
				engine: "Rotary",
				hp: 180,
			},
		],
	});

	await prisma.racer.createMany({
		data: [
			{
				name: "Ayrton Senna",
				birth: "1960-03-21T00:00:00.000Z",
				number: 1,
			},
			{
				name: "Michael Schumacher",
				birth: "1969-01-03T00:00:00.000Z",
				number: 14,
			},
			{
				name: "Lewis Hamilton",
				birth: "1985-01-07T00:00:00.000Z",
				number: 5,
			},
		],
	});

	await prisma.circuits.createMany({
		data: [
			{
				track_id: 3,
				racer_id: 3,
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
