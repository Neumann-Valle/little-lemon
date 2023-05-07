import { Text, View, StyleSheet, ImageBackground } from "react-native";
// import backgroundImage from "../assets/lemon-png-38649.png";

function UpdatingScreen() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        style={styles.ImageBackground}
        resizeMode="cover"
        source={backgroundImage}
      > */}
        <Text style={styles.text}>Updating profile!</Text>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Markazy-Text",
    color: "#fff",
    fontSize: 24,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});

export default UpdatingScreen;
