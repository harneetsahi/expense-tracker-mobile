import { Alert } from "react-native";
import { useCallback, useState } from "react";
export const API_URL = "http://localhost:4444/api/transactions";

export default function useTransactions(userId: string) {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // to memoize the function
  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/${userId}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("failed to fetch transactions ", error);
    }
  }, [userId]);

  const fetchSumary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/summary/${userId}`);
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error("failed to fetch summary ", error);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) return;

    setIsLoading(true);

    try {
      await Promise.all([fetchTransactions(), fetchSumary()]);
    } catch (error) {
      console.error("error in loading data :", error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTransactions, fetchSumary, userId]);

  const deleteTransaction = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete transaction");

      // re-fetch transactions after deleting one
      loadData();
    } catch (error) {
      console.error("failed to delete the transaction ", error);
      Alert.alert("Error", "Failed to delete");
    }
  };

  return { transactions, summary, isLoading, loadData, deleteTransaction };
}
