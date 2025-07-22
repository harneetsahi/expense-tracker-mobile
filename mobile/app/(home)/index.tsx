import { SignedIn, useUser } from "@clerk/clerk-expo";
import { Redirect, useRouter } from "expo-router";
import {
  Alert,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SignOutButton } from "@/components/SignOutButton";
import useTransactions from "@/hooks/useTransactions";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { styles } from "@/assets/styles/home.styles";
import TransactionItem from "@/components/TransactionItem";
import NoTransactionsFound from "@/components/NoTransactionsFound";
import { Ionicons } from "@expo/vector-icons";
import { formatWithCommas } from "@/lib/utils";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  if (!user) return <Redirect href={"./sign-in"} />;

  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(user?.id);

  async function onRefresh() {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }

  useEffect(() => {
    loadData();
  }, [loadData]);

  function handleDelete(id: number) {
    Alert.alert("Delete", "Are you sure you want to delete the transaction?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => deleteTransaction(id),
      },
    ]);
  }

  if (isLoading && !refreshing) return <Loader />;

  return (
    <View style={styles.container}>
      <SignedIn>
        <View style={styles.header}>
          <Text style={styles.heading}>Home</Text>
          <SignOutButton />
        </View>
        <View style={styles.main}>
          <View style={styles.summary}>
            <View style={styles.balanceContent}>
              <Text style={styles.balanceHeading}>Your balance</Text>
              <Text
                style={[
                  styles.balance,
                  summary.balance < 0 && styles.balanceNegative,
                ]}
              >
                $
                {formatWithCommas(Math.abs(Number(summary.balance)).toFixed(2))}
              </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.category}>Total expenses</Text>
              <Text style={styles.expenseAmount}>
                - $
                {formatWithCommas(
                  Math.abs(Number(summary.expenses)).toFixed(2)
                )}
              </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.category}>Total income</Text>
              <Text style={styles.incomeAmount}>
                + $
                {formatWithCommas(Math.abs(Number(summary.income)).toFixed(2))}
              </Text>
            </View>
          </View>

          <View style={styles.recents}>
            <View style={styles.recentHeader}>
              <Text style={styles.recentsHeading}>Recent transactions</Text>
              <TouchableOpacity onPress={() => router.push("./create")}>
                <Ionicons name={"add"} color={"black"} size={30} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={transactions}
              renderItem={({ item }) => (
                <TransactionItem item={item} onDelete={handleDelete} />
              )}
              contentContainerStyle={styles.recentListContainer}
              ListEmptyComponent={<NoTransactionsFound />}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            ></FlatList>
          </View>
        </View>
      </SignedIn>
    </View>
  );
}
