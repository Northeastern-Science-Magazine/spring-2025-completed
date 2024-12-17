import express from "express";
import cors from "cors";
import helmet from "helmet";
import defaultRouter from "./routes/defaultRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", defaultRouter);


export default app;