import { View, Text } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/transactions.styles";

const NoTransactionsFound = () => {
  return (
    <View style={styles.noTransactions}>
      <Text style={styles.noTransactionsText}>Nothing to show!</Text>
    </View>
  );
};

export default NoTransactionsFound;
