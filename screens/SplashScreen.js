import { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AppContext } from "../components/AppContext.component";
import logo from "../assets/Logo.png";

function SplashScreen(navigator) {
  const Context = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Image source={logo} resizeMode="cover" style={styles.image} />
      <Text style={styles.text}>
        {AppContext.loading ? "Loading..." : "Hang on, Updating profile!"}
      </Text>
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
  image: {},
  text: {
    padding: 15,
    fontFamily: "Markazy-Text",
    color: "#fff",
    fontSize: 20,
  },
});

export default SplashScreen;
