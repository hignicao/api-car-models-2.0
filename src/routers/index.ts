import { Router } from "express";
import circuitRouter from "./circuits-router.js";
import racerRouter from "./racers-router.js";
import trackRouter from "./tracks-router.js";

const router = Router();
router.use(racerRouter);
router.use(circuitRouter);
router.use(trackRouter);

export default router;
