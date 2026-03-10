import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3001;

app.get("/health", (_req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
