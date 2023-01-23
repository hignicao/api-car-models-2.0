import { connectionDB } from "../database/db.js";

export function rankingByTrack(track: string) {
	return connectionDB.query(
	`SELECT track.name as track_name, racer.name as racer_name, car.model as car_model, circuits.time_lap
  FROM circuits
  JOIN car
  ON circuits.car_id = car.id
  JOIN track
  ON circuits.track_id = track.id
  JOIN racer
  ON circuits.racer_id = racer.id
  WHERE circuits.track_id = $1
  ORDER BY circuits.time_lap
  LIMIT 10`,
		[track]
	);
}

export function getTrackById(id: string) {
	return connectionDB.query("SELECT * FROM track WHERE id = $1", [id]);
}
