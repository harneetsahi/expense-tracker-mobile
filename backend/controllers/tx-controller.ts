import { Request, Response } from "express";
import { sql } from "../config/db";

export async function transactions(req: Request, res: Response) {
  try {
    const { title, amount, category, user_id } = req.body;

    if (!title || !user_id || !category || amount === undefined) {
      res.status(400).json({
        message: "All fields are required",
      });
      return;
    }

    if (isNaN(parseInt(user_id))) {
      res.status(404).json({ message: "Invalid user ID" });
      return;
    }

    if (isNaN(parseInt(amount))) {
      res.status(404).json({ message: "Invalid amount" });
      return;
    }

    const transaction = await sql`
    INSERT INTO transactions(user_id, title, amount, category)
    VALUES (${user_id}, ${title}, ${amount}, ${category})
    RETURNING *
    `;

    console.log(transaction);
    res.status(201).json(transaction[0]);
  } catch (error) {
    console.error("Failed to create a transaction ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function fetchTransactions(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    console.log(userId);

    if (!userId) {
      res.status(400).json({
        message: "Please specify the user",
      });
      return;
    }

    const allTransactions = await sql`
    SELECT * FROM transactions WHERE user_id = ${userId} ORDER BY created_at DESC
    `;

    res.status(201).json(allTransactions);
  } catch (error) {
    console.error("Failed to fetch the transactions ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function deleteTransaction(req: Request, res: Response) {
  try {
    const { id } = req.params;
    console.log(id);

    if (isNaN(parseInt(id))) {
      res.status(404).json({ message: "Invalid transaction ID" });
      return;
    }

    const remaningTransactions = await sql`
    DELETE FROM transactions WHERE id = ${id} RETURNING *
    `;

    if (remaningTransactions.length === 0) {
      res.status(404).json({ message: "Transaction not found" });
      return;
    }

    res.status(201).json({
      message: "Deleted successfully",
      transactions: remaningTransactions,
    });
  } catch (error) {
    console.error("Failed to delete the transaction ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export async function fetchSummary(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    console.log(userId);

    if (!userId) {
      res.status(400).json({
        message: "User ID is required",
      });
      return;
    }

    if (isNaN(parseInt(userId))) {
      res.status(404).json({ message: "Invalid user ID" });
      return;
    }

    const balanceTotal = await sql`
    SELECT COALESCE(SUM(amount), 0) as balance FROM transactions WHERE user_id = ${userId}
    `;

    const incomeTotal = await sql`
    SELECT COALESCE(SUM(amount), 0) as income FROM transactions WHERE user_id = ${userId}
    AND amount > 0
    `;

    const expensesTotal = await sql`
    SELECT COALESCE(SUM(amount), 0) as expenses FROM transactions WHERE user_id = ${userId}
    AND amount < 0
    `;

    res.status(201).json({
      message: "Summary",
      balance: balanceTotal[0].balance,
      income: incomeTotal[0].income,
      expenses: expensesTotal[0].expenses,
    });
  } catch (error) {
    console.error("Failed to fetch summary ", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
}
