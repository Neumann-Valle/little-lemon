import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#121212",
    gap: 15,
  },
  backgroundImage: {
    // flex: 1,
    // justifyContent: "center",
  },
  notifications: {
    gap: 6,
  },
  avatarContainer: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: "10%",
    gap: 20,
  },
  profileAvatar: {
    width: 63,
    height: 63,
    borderRadius: 30,
  },
  avatarButtonChange: {
    alignItems: "center",
    backgroundColor: "#495E57",
    padding: 10,
    borderRadius: 10,
  },
  avatarButtonRemove: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  avatarButtonText: {
    color: "black",
    fontFamily: "Karla-Regular",
  },
  emailNotificationSub: {
    color: "rgb(229, 229, 231)",
    fontFamily: "Markazy-Text",
    fontSize: 18,
    fontWeight: "800",
    marginLeft: "10%",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
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
  inputInner: {
    alignSelf: "center",
    width: "80%",
    backgroundColor: "lightgrey",
    borderRadius: 10,
    padding: 2,
    margin: 5,
  },
  input: {
    marginLeft: 5,
    color: "#121212",
  },
  logoutButton: {
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#F4CE14",
    padding: 6,
    borderRadius: 10,
  },
  doubleButton: {
    marginTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  buttonDiscard: {
    alignItems: "center",
    width: "35%",
    backgroundColor: "grey",
    padding: 5,
    borderRadius: 10,
  },
  buttonSave: {
    alignItems: "center",
    width: "35%",
    backgroundColor: "green",
    padding: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: "#121212",
    fontFamily: "Karla-Regular",
  },
});
