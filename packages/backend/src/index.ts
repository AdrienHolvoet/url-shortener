import "dotenv/config";
import express from "express";
import cors from "cors";
import { router as indexRouter } from "./routes/index";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.use("", indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
