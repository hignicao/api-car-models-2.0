import { connectionDB } from "../database/db.js";
import { Racer } from "../utils/protocols.js";

export function getRacersByNumber(number: number) {
	return connectionDB.query("SELECT * FROM racer WHERE number = $1", [number]);
}

export function getRacerById(id: number) {
	return connectionDB.query("SELECT * FROM racer WHERE id = $1", [id]);
}

export function postRacer(racer: Racer) {
	return connectionDB.query("INSERT INTO racer (name, birth, number) VALUES ($1, $2, $3)", [racer.name, racer.birth, racer.number]);
}

export function updateNumber(id: string, number: number) {
	return connectionDB.query("UPDATE racer SET number = $1 WHERE id = $2", [number, id]);
}
