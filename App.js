import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useFonts } from "expo-font";
import Onboarding from "./screens/Onboarding";
import logo from "./assets/Logo.png";
import safeareaStyle from "./utilities/Safearea.style.component";
import { useEffect, useState } from "react";
import isvalid_email from './utilities/validate.email'

export default function App() {
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [fontsLoaded] = useFonts({
    "Markazy-Text": require("./assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
  });

  useEffect(() => {
    // get data from sqlite
    setOnboardingDone(true);
    console.log("loaded");
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  if (!onboardingDone) {
    return null;
  }

  function onchangeinput(value) {
    if (isvalid_email(value)) {
      setButtonActive(true);
    }
  }


  const inputLenght = 25;

  // todo this doesnt work
  styles.button.opacity = buttonActive ? styles.button.opacity = 1.0 : styles.button.opacity;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image source={logo} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.innerSubtitle}>Let us get to know you</Text>
      </View>
      <View style={styles.inputMain} accessible={true}>
        <View style={styles.inputContainer}>
          <TextInput
            styles={styles.input}
            placeholder="First Name"
            autoComplete="off"
            maxLength={inputLenght}
            placeholderTextColor={"grey"}
            onChangeText={null}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            color
            styles={styles.input}
            placeholderTextColor={"grey"}
            placeholder="Email"
            keyboardType="email-address"
            autoComplete="off"
            maxLength={inputLenght}
            onChangeText={onchangeinput}
          />
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
  image: {
    // width: '100%',
  },
  innerText: {
    fontFamily: "Markazy-Text",
  },
  subTitle: {
    fontFamily: "Markazy-Text",
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
    backgroundColor: "lightgrey",
    borderRadius: 10,
    marginBottom: 30,
    padding: 15,
  },
  button: {
    alignSelf: "flex-end",
    width: "30%",
    backgroundColor: "#F4CE14",
    opacity: 0.4,
    marginRight: 43,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Karla-Regular",
    fontSize: 13,
    color: "white",
  },
});
