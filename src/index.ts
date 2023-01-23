import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.get("/health", (req: Request, res: Response) => res.send("OK"));
app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`Server running in ${port} port`);
});
