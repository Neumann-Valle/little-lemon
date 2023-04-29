import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#121212",
    gap: 15,
  },
  profileColorText: {
    color: "rgb(229, 229, 231)",
  },
  inputContainer: {},
  input: {
    alignSelf: "center",
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    // marginBottom: 30,
    padding: 5,
    margin: 5,
  },
  logoutButton: {
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#F4CE14",
    padding: 15,
    borderRadius: 10,
  },
  doubleButton: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  buttonDiscard: {
    alignItems: "center",
    width: "35%",
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
  },
  buttonSave: {
    alignItems: "center",
    width: "35%",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
  },
});
