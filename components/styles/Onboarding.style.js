import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  logoContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 50,
    borderRadius: 15,
  },
  title: {
    fontSize: 64,
  },
  innerSubtitle: {
    fontFamily: "Markazy-Text",
    color: "#fff",
    opacity: 0.5,
    fontSize: 24,
  },
  image: {},
  innerText: {},
  subTitle: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputMain: {
    width: "80%",
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 30,
    padding: 15,
  },
  buttonInactive: {
    alignSelf: "flex-end",
    width: "30%",
    backgroundColor: "#F4CE14",
    opacity: 0.4,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonActive: {
    alignSelf: "flex-end",
    width: "30%",
    backgroundColor: "#F4CE14",
    opacity: 0.8,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Karla-Regular",
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
  },
});
