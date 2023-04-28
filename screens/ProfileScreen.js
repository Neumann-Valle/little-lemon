import { useFonts } from "expo-font";
import * as React from "react";
import { View, Text } from "react-native";

function ProfileScreen(navigator) {
  const [fontsLoaded] = useFonts({
    "Markazy-Text": require("../assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile page</Text>
    </View>
  );
}

export default ProfileScreen;
