import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db";
import rateLimiter from "./middleware/rateLimiter";
import txrouter from "./routes/tx-routes";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

async function connectDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transactions(
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      category VARCHAR(255) NOT NULL,
      created_at DATE NOT NULL DEFAULT CURRENT_DATE)`;

    console.log("DB connected successfully");
  } catch (error) {
    console.error("Failed to connect to DB ", error);
    process.exit(1);
  }
}

app.use(rateLimiter);

app.use("/api/transactions", txrouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("App running on port: ", PORT);
  });
});
