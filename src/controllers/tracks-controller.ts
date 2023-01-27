import { Request, Response } from "express";
import trackService from "../services/track-service.js";

export async function rankingByTrack(req: Request, res: Response) {
  const track = req.params.trackId;

  try {
    const ranking = await trackService.getRankingByTrack(Number(track));
    res.send(ranking);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
