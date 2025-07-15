import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffffff",
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    marginBottom: 50,
  },
  errorBox: {
    flexDirection: "row",
    borderRadius: 10,
    borderLeftColor: "#df2929ff",
    borderLeftWidth: 3,
    backgroundColor: "#fbdbdbff",
    paddingVertical: 10,
    paddingHorizontal: 4,
    width: 330,
    marginBottom: 20,
    alignItems: "center",
  },
  errorTextContainer: {
    flex: 1,
    gap: 3,
    paddingHorizontal: 6,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    flex: 1,
  },

  textInput: {
    padding: 3,
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 5,
    width: 330,
    textAlign: "center",
    backgroundColor: "#fcf5f5d9",
  },
  errorInput: {
    borderColor: "#df2929ff",
    borderWidth: 1,
  },
  button: {
    borderRadius: 20,
    fontSize: 18,
    width: 330,
    textAlign: "center",
    paddingVertical: 11,
    paddingHorizontal: 15,
    backgroundColor: "#fbc933ff",
    marginBottom: 70,
  },
  authTextInput: {
    padding: 3,
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 330,
    backgroundColor: "#fcf5f5d9",
  },
  footer: {
    letterSpacing: 0.3,
    fontSize: 16,
  },
});
