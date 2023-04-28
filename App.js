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
import isvalid_email from "./utilities/validate.email";

export default function App() {
  const [onboardingDone, setOnboardingDone] = useState(false);
  useEffect(() => {
    // get data from sqlite
    setOnboardingDone(true);
    console.log("loaded");
  }, []);

  if (!onboardingDone) {
    return null;
  }
  return <Onboarding />;
}
