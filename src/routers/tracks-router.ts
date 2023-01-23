import { Router } from "express";
import { rankingByTrack } from "../controllers/tracks-controller.js";

const trackRouter = Router();

trackRouter.get('/ranking/:trackId', rankingByTrack);

export default trackRouter;