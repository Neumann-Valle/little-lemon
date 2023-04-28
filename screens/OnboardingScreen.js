import { useFonts } from "expo-font";
import logo from "../assets/Logo.png";
import { useState } from "react";
import isvalid_email from "../utilities/validate.email";
import isvalid_name from "../utilities/validate.name";
import styles from "../components/styles/Onboarding.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

function OnboardingScreen(navigator) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [fontsLoaded] = useFonts({
    "Markazy-Text": require("../assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  function parseName(name) {
    if (isvalid_name(name)) {
      setName(name);
    } else {
      setName("");
    }
    activateButton();
  }

  function parseEmail(value) {
    if (isvalid_email(value)) {
      setEmail(value);
    } else {
      setEmail("");
    }
    activateButton();
  }

  function activateButton() {
    if (name !== "" && email !== "") {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }

  function nextScreen() {
    if (!buttonActive) {
      return;
    }

    async function saveCredentials() {
      try {
        await AsyncStorage.setItem("lastname", name);
        await AsyncStorage.setItem("email", email);
      } catch (error) {
        // Error saving data
        console.log(error);
      }
    }

    saveCredentials();
  }

  const buttonProps = {
    style: buttonActive ? styles.buttonActive : styles.buttonInactive,
    onPress: nextScreen,
  };

  const inputLenght = 25;

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
            onChangeText={parseName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            color
            styles={styles.input}
            placeholderTextColor={"grey"}
            placeholder="Your user@anyemail.com"
            keyboardType="email-address"
            autoComplete="off"
            maxLength={inputLenght}
            onChangeText={parseEmail}
          />
        </View>
      </View>
      <Pressable {...buttonProps}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

export default OnboardingScreen;
