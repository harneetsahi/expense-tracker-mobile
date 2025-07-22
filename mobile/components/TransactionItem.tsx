import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/transactions.styles";
import { Ionicons } from "@expo/vector-icons";
import { formatDate, formatWithCommas } from "@/lib/utils";

export interface ItemI {
  id: number;
  title: string;
  amount: number;
  category: string;
  created_at: string;
}

const TransactionItem = ({
  item,
  onDelete,
}: {
  item: ItemI;
  onDelete: (id: number) => void;
}) => {
  const isIncome = item.amount > 0;

  return (
    <View key={item.id} style={styles.transaction}>
      <View style={styles.transactionContent}>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
        </View>
        <View style={styles.transactionDetails}>
          <Text
            style={[
              styles.transactionAmount,
              isIncome
                ? styles.transactionAmountIncome
                : styles.transactionAmountExpense,
            ]}
          >
            {isIncome ? "+" : "-"} $
            {formatWithCommas(Math.abs(Number(item.amount)).toFixed(2))}
          </Text>
          <Text style={styles.transactionDate}>
            {formatDate(item.created_at)}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.transactionDelete}
      >
        <Ionicons name="trash-outline" color={"red"} size={20}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionItem;
