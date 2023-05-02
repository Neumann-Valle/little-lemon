import * as React from "react";
import { View, Text, Image } from "react-native";
import logo from "../assets/Logo.png";

function SplashScreen(navigator) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Image source={logo} resizeMode="cover"/>
        <Text style={{fontFamily: "Karla-Regular",}}>Loading...</Text>
      </View>
    </View>
  );
}

export default SplashScreen;
