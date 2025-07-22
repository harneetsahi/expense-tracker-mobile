import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  createContainer: {
    flex: 1,
    backgroundColor: "#faf9faff",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 70,
    marginBottom: 20,
  },
  txTypeButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 40,
    fontSize: 18,
    fontWeight: 500,
    color: "black",
    borderColor: "#e9e9e9ff",
    backgroundColor: "white",
    borderWidth: 0.5,
  },
  txTypeActiveExpense: {
    color: "#df351e",
  },
  txTypeActiveIncome: {
    color: "green",
  },
  textInputAmountContainer: {
    padding: 20,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    borderColor: "#e9e9e9ff",
    borderWidth: 0.5,
    flexDirection: "row",
  },
  textInputSymbol: {
    fontSize: 30,
  },
  textInputAmount: {
    fontSize: 30,
    paddingLeft: 10,

    flex: 1,
  },
  textInputTitle: {
    paddingHorizontal: 26,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    fontSize: 20,
    backgroundColor: "#ffffff",
    borderColor: "#e9e9e9ff",
    borderWidth: 0.5,
  },
  addBtn: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 40,
    fontSize: 18,
    fontWeight: 500,
    color: "black",
    backgroundColor: "#fbc933ff",
    margin: 20,
    textAlign: "center",

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 3,
    shadowOpacity: 0.1,
  },
  addBtnDisabled: {
    opacity: 0.6,
  },
});
