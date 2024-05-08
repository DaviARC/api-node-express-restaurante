import express from "express";
import client from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
routes(app);

export default app;
