import express, { Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import rateLimiter from "./middleware/rateLimiter";
import txrouter from "./routes/tx-routes";
import job from "./config/cron";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "production") job.start();

app.use(express.json());
app.use(rateLimiter);

const PORT = process.env.PORT || 3000;

app.get("/api/health", (_, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/transactions", txrouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("App running on port: ", PORT);
  });
});
