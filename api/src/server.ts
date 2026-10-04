import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
import "dotenv/config";
import app from "./app.js";
import { connectDatabase } from "./db.js";

const PORT = process.env.PORT || 3000;

const startServer = async (): Promise<void> => {
  await connectDatabase();

  app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "TrustLayer API is running",
  });
});

  app.listen(PORT, () => {
    console.log(`TrustLayer API running on port ${PORT}`);
  });
};

startServer();