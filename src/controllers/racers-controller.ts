import { Request, Response } from "express";
import racerService from "../services/racer-service.js";
import { Racer } from "../utils/protocols.js";

export async function registerNewRacer(req: Request, res: Response) {
  const racer: Racer = req.body;

  try {
    await racerService.validadeRacerBody(racer);
    await racerService.validadeRacerNumber(racer.number);
    await racerService.registerRacer(racer);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function updateRacerNumber(req: Request, res: Response) {
  const { id } = req.params;
  const newNumber = req.body.number as number;

  try {
    await racerService.validadeRacerNumber(newNumber);
    await racerService.updateRacerNumber(id, newNumber);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error.message);
  }

}