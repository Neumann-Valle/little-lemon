import { useFonts } from "expo-font";
import * as React from "react";
import { View, Text } from "react-native";

function SplashScreen(navigator) {
  const [fontsLoaded] = useFonts({
    "Markazy-Text": require("../assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Karla-Regular",
      }}
    >
      <Text>Loading...</Text>
    </View>
  );
}

export default SplashScreen;
