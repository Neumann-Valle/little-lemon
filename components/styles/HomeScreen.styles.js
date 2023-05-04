import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#121212",
    gap: 15,
  },
  heroArea: {
    backgroundColor: "#495E57",
    width: "90%",
    borderRadius: 16,
  },
  heroAreaInner: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  heroAreaText: {
    width: "55%",
    paddingLeft: 20,
  },
  heroTitle: {
    color: "#F4CE14",
    fontFamily: "Markazy-Text",
    fontSize: 40,
  },
  heroSub: {
    color: "#fff",
    fontFamily: "Markazy-Text",
    fontSize: 30,
  },
  heroParagraph: {
    color: "#fff",
    fontFamily: "Karla-Regular",
    fontSize: 16,
  },
  heroImage: {
    width: 150,
    height: 130,
    borderRadius: 16,
  },
  inputContainer: {
    borderRadius: 16,
    alignSelf: "center",
    width: "80%",
    margin: 10,
    padding: 5,
    backgroundColor: "lightgrey",
  },
  buttonContainer: {
    width: "80%",
    gap: 15,
  },
  innerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttons: {
    color: "black",
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 5,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
  },
});
