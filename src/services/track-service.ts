import { getTrackById, rankingByTrack } from "../repositories/tracks-repository.js";

async function getRankingByTrack(track: string) {
  const trackExists = await getTrackById(track);
  if (trackExists.rowCount === 0) {
    throw new Error("Pista não encontrada");
  }

  try {
    const ranking = await rankingByTrack(track)
    return ranking;
  } catch (error) {
    throw new Error("Erro ao buscar ranking por pista");
  }
}

const trackService = {
  getRankingByTrack,
}

export default trackService;