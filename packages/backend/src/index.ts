import "dotenv/config";
import express from "express";
import cors from "cors";
import { router as urlsRouter } from "./routes/urls";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.send("ok");
});

app.use("/urls", urlsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
