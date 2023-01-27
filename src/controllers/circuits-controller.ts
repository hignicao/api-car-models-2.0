import { Request, Response } from "express";
import carService from "../services/car-service.js";
import circuitService from "../services/circuit-service.js";
import racerService from "../services/racer-service.js";
import { Circuit } from "../utils/protocols.js";

export async function newCircuit(req: Request, res: Response) {
	const circuit = req.body as Circuit;

	try {
		await circuitService.validateCircuitBody(circuit);
		await racerService.findRacer(circuit.racer_id);
    await carService.findCar(circuit.car_id);
		await circuitService.postNewCircuit(circuit);
		res.sendStatus(201);
	} catch (error) {
		res.status(400).send(error.message);
	}
}

export async function deleteCircuit(req: Request, res: Response) {
	const id = req.params.id;

	try {
		await circuitService.deleteCircuitById(Number(id));
		res.sendStatus(200);
	} catch (error) {
		res.status(400).send(error.message);
	}
}
