import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

import { useUser } from "@clerk/clerk-expo";
import { styles } from "@/assets/styles/create.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { API_URL } from "@/hooks/useTransactions";

export default function create() {
  const router = useRouter();
  const { user } = useUser();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isIncome, setIsIncome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0)
      return Alert.alert("Error", "Please enter a valid amount");

    if (!title) return Alert.alert("Error", "Please write a transaction name");

    const category = isIncome ? "income" : "expenses";

    setIsLoading(true);

    try {
      const formatAmount = isIncome
        ? Math.abs(Number(amount))
        : -Math.abs(Number(amount));

      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user?.id,
          title,
          amount: formatAmount,
          category,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create a transaction");
      }

      router.navigate({
        pathname: "../",
        params: { refresh: "true" },
      });
    } catch (error) {
      console.error("error while creating a transaction ", error);
      Alert.alert("Error", "Unable to create a transaction");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.createContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={25} />
        </TouchableOpacity>
        <Text style={styles.heading}>New transaction</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => setIsIncome(false)}>
          <Text
            style={[
              styles.txTypeButton,
              !isIncome && styles.txTypeActiveExpense,
            ]}
          >
            Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsIncome(true)}>
          <Text
            style={[styles.txTypeButton, isIncome && styles.txTypeActiveIncome]}
          >
            Income
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.textInputAmountContainer}>
          <Text style={styles.textInputSymbol}>$</Text>
          <TextInput
            value={amount}
            onChangeText={(amount) => setAmount(amount)}
            style={styles.textInputAmount}
            placeholder="0.00"
            keyboardType="numeric"
          ></TextInput>
        </View>

        <TextInput
          value={title}
          onChangeText={(title) => setTitle(title)}
          style={styles.textInputTitle}
          placeholder="Title"
        ></TextInput>

        <TouchableOpacity
          onPress={handleCreate}
          disabled={isLoading}
          style={[isLoading && styles.addBtnDisabled]}
        >
          <Text style={styles.addBtn}>
            {" "}
            {isLoading ? (
              <ActivityIndicator size={"small"} color={"gray"} />
            ) : (
              "Add"
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
