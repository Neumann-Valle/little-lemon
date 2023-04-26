import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { useFonts } from "expo-font";
import Onboarding from "./screens/Onboarding";
// import logo from "./assets/logo.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Markazy-Text": require("./assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        {/* <Image source={logo}/> */}
        <Text style={styles.title}>Little Lemon</Text>
      </View>
      <View>
        <Text>Let us get to know you</Text>
      </View>
      <View style={styles.inputMain} accessible={true}>
        <View style={styles.inputContainer}>
          <TextInput styles={styles.input} placeholder="First Name" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            styles={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={styles.button}>
        <Text>Next</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 64,
  },
  innerText: {
    fontFamily: "Markazy-Text",
    fontWeight: "900",
  },
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
    backgroundColor: "yellow",
  },
  button: {
    width: "20%",
    backgroundColor: "grey",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
