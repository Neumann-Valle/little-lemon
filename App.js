import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Onboarding from "./screens/Onboarding";
import logo from "./assets/Logo.png";
import safeareaStyle from './utilities/Safearea.style.component'
import { useEffect, useState } from "react";

export default function App() {
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [fontsLoaded] = useFonts({
    "Markazy-Text": require("./assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
  });

  useEffect(() => {
    // get data from sqlite
    setOnboardingDone(true);
    console.log('loaded');
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  if (!onboardingDone) {
    return null;
  }


  return (
    <SafeAreaView style={safeareaStyle.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.subTitle}>
          <Text style={styles.innerSubtitle}>Let us get to know you</Text>
        </View>
        <View style={styles.inputMain} accessible={true}>
          <View style={styles.inputContainer}>
            <TextInput styles={styles.input}
              placeholder="First Name"
              autoComplete="off"
              maxLength={15}
              placeholderTextColor={'grey'} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              color
              styles={styles.input}
              placeholderTextColor={'grey'}
              placeholder="Email"
              keyboardType="email-address"
              autoComplete='off'
              maxLength={15}
            />
          </View>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    gap: 50
  },
  logoContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 50,
    borderRadius: 15,
  },
  title: {
    fontSize: 64,
  },
  innerSubtitle: {
    fontFamily: "Markazy-Text",
    color: '#fff',
    opacity: .5,
    fontSize: 24
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
    alignSelf: 'flex-end',
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
    color: '#121212'
  }
});
