import { connectionDB } from "../database/db.js";
import { Circuit } from "../utils/protocols.js";

export function postCircuit(circuit: Circuit) {
	return connectionDB.query("INSERT INTO circuits (racer_id, car_id, track_id, time_lap) VALUES ($1, $2, $3, $4)", [circuit.racer, circuit.car, circuit.track, circuit.time]);
}

export function deleteCircuit(id: string) {
  return connectionDB.query("DELETE FROM circuits WHERE id = $1", [id]);
}