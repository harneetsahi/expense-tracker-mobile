import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  transaction: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,
  },
  transactionContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 20,
    textTransform: "capitalize",
    paddingBottom: 5,
  },
  transactionCategory: {
    color: "#909090ff",
  },
  transactionDetails: {
    borderRightWidth: 0.3,
    borderColor: "#bbbbbbff",
    paddingRight: 20,
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 18,
    paddingBottom: 5,
  },
  transactionAmountExpense: {
    color: "red",
  },
  transactionAmountIncome: {
    color: "green",
  },
  transactionDate: {
    color: "#909090ff",
    fontSize: 13,
  },
  transactionDelete: {
    paddingHorizontal: 10,
  },
  noTransactions: {
    alignItems: "center",
    marginVertical: 30,
  },
  noTransactionsText: {
    fontSize: 16,
    color: "gray",
  },
});
