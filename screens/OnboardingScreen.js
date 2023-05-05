import logo from "../assets/Logo.png";
import { useState } from "react";
import storeCredentials from "../utilities/storage.store.credentials";
import isvalid_email from "../utilities/validate.email";
import isvalid_name from "../utilities/validate.name";
import styles from "../components/styles/Onboarding.style";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";

function OnboardingScreen({ route, navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

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
      const credentials = await storeCredentials(name, email);
      if (!credentials.stored) {
        console.log(credentials.err);
        return;
      }
      navigation.navigate("Home");
    }

    saveCredentials();
  }

  const buttonProps = {
    style: buttonActive ? styles.buttonActive : styles.buttonInactive,
    onPress: nextScreen,
  };

  const inputLenght = 25;

  return (
    <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
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
        <Pressable {...buttonProps}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

export default OnboardingScreen;
