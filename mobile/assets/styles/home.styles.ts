import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf9faff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  main: {
    position: "relative",
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f3f7ff",
  },
  summary: {
    backgroundColor: "#ffffff",
    marginTop: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 3,
    shadowOpacity: 0.1,
    borderRadius: 20,
  },
  balanceContent: {
    marginBottom: 20,
  },
  content: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceHeading: {
    fontSize: 15,
    fontWeight: 600,
    color: "gray",
  },
  balance: {
    fontSize: 40,
    paddingTop: 10,
    fontWeight: 500,
  },
  balanceNegative: {
    color: "#f32323ff",
  },
  category: {
    fontSize: 18,
    fontWeight: 500,
    color: "gray",
  },
  expenseAmount: {
    fontSize: 20,
    fontWeight: 500,
    color: "red",
  },
  incomeAmount: {
    fontSize: 20,
    fontWeight: 500,
    color: "green",
  },
  recents: {
    marginTop: 50,
    flex: 1,
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  recentsHeading: {
    fontSize: 25,
    fontWeight: 600,
  },
  recentListContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 3,
    shadowOpacity: 0.1,
    borderRadius: 20,
  },
});
