import { connectionDB } from "../database/db.js";

export function findCarById(id: number) {
  return connectionDB.query("SELECT * FROM car WHERE id = $1", [id]);
}