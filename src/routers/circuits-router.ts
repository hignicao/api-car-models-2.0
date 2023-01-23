import { Router } from "express";
import { deleteCircuit, newCircuit } from "../controllers/circuits-controller.js";

const circuitRouter = Router();

circuitRouter.post("/circuit", newCircuit);
circuitRouter.delete('/circuit/:id', deleteCircuit);

export default circuitRouter;