import * as React from "react";
import { View, Text } from "react-native";

function SplashScreen(navigator) {
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
