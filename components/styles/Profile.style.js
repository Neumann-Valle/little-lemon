import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#121212",
    gap: 15,
  },
  notifications: {
    gap: 6,
  },
  emailNotificationSub: {
    color: "rgb(229, 229, 231)",
    fontFamily: "Markazy-Text",
    fontSize: 18,
    fontWeight: "800",
    marginLeft: "10%",
  },
  profileText: {
    color: "rgb(229, 229, 231)",
    fontFamily: "Karla-Regular",
    marginLeft: "10%",
  },
  headerSub: {
    gap: 25,
  },
  inputContainer: {},
  input: {
    alignSelf: "center",
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 2,
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
  buttonText: {
    color: "#121212",
    fontFamily: "Karla-Regular",
  },
});
