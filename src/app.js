import express from "express";
import client from "./config/dbConnect.js";

const app = express();

app.use(express.json());

export default app;
