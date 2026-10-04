import express, { type Application } from "express";

const app: Application = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "TrustLayer API is running",
  });
});

export default app;