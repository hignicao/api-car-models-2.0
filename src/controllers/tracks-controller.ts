import { Request, Response } from "express";
import trackService from "../services/track-service.js";

export async function rankingByTrack(req: Request, res: Response) {
  const track = req.params.trackId;
  try {
    const ranking = await trackService.getRankingByTrack(track);
    res.send(ranking.rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
