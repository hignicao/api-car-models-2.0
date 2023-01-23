import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const user = "postgres";
const password = "2486";
const host = "localhost";
const port = 5432;
const database = "car-models";

export const connectionDB = new Pool({
	user,
  password,
  host,
  port,
  database,
});