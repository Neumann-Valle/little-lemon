import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { useFonts } from "expo-font";
import Onboarding from "./screens/Onboarding";
import logo from "./assets/Logo.png";

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
      <View style={styles.logoContainer}>
        <Image source={logo}
        resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.subTitle}>
        <Text>Let us get to know you</Text>
      </View>
      <View style={styles.inputMain} accessible={true}>
        <View style={styles.inputContainer}>
          <TextInput styles={styles.input}
            placeholder="First Name"
            autoComplete="off"
            maxLength={15}
            placeholderTextColor={'blue'} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            color
            styles={styles.input}
            placeholderTextColor={'blue'}
            placeholder="Email"
            keyboardType="email-address"
            autoComplete='off'
            maxLength={15}
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
    gap: 15
  },
  logoContainer: {
    // backgroundColor: 'olive',
    marginBottom: 50,
  },
  title: {
    fontSize: 64,
  },
  image: {
    // width: '100%',
  },
  innerText: {
    fontFamily: "Markazy-Text",
    fontWeight: "900",
  },
  subTitle: {
    fontFamily: "Markazy-Text",
    fontWeight: "900",
    marginBottom: 50,
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
    backgroundColor: "grey",
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  button: {
    alignSelf: 'flex-end',
    width: "30%",
    backgroundColor: "grey",
    marginRight: 43,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
