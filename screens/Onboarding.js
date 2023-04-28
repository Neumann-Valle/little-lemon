import { useFonts } from "expo-font";
import logo from "../assets/Logo.png";
import safeareaStyle from "../utilities/Safearea.style.component";
import { useEffect, useState } from "react";
import isvalid_email from "../utilities/validate.email";
import styles from "../components/styles/Onboarding.style";
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

function Onboarding() {
  const [buttonActive, setButtonActive] = useState(false);
  const [fontsLoaded] = useFonts({
    "Markazy-Text": require("../assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  function onchangeinput(value) {
    if (isvalid_email(value)) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }

  const buttonProps = {
    style: buttonActive ? styles.buttonActive : styles.buttonInactive,
    onPress: () => {
      console.log("pressing button");
    },
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
      <Pressable {...buttonProps}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

export default Onboarding;
