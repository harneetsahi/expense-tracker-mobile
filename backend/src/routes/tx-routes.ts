import { Router } from "express";
import {
  deleteTransaction,
  fetchSummary,
  fetchTransactions,
  transactions,
} from "../controllers/tx-controller";

const txrouter = Router();

txrouter.get("/:userId", fetchTransactions);
txrouter.post("/", transactions);
txrouter.delete("/:id", deleteTransaction);
txrouter.get("/summary/:userId", fetchSummary);

export default txrouter;
