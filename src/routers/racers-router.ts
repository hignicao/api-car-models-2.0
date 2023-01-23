import { Router } from "express";
import { registerNewRacer, updateRacerNumber } from "../controllers/racers-controller.js";

const racerRouter = Router();

racerRouter.post("/racer", registerNewRacer);
racerRouter.put('/racer/:id', updateRacerNumber);

export default racerRouter;