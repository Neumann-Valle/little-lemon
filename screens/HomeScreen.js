import * as React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header.component";

function HomeScreen({ route, navigation }) {
  return (
    <>
      <Header />
      <Text style={{ color: "white" }}>Welcome back!</Text>
    </>
  );
}

export default HomeScreen;
