import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 5,
      backgroundColor: "lightgrey",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    innerTextContainer: {
      width: "60%",
    },
    title: {
      fontFamily: "Markazy-Text",
      fontSize: 25,
      fontWeight:'400'
    },
    description: {
      fontFamily: "Karla-Regular",
    },
    price: {
      fontFamily: "Markazy-Text",
      fontSize: 25,
      opacity: 0.5
    },
    image: {
      // padding: 2,
      backgroundColor: "black",
      borderRadius: 5,
      height: 100,
      width: 100,
    },
  });