import * as React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Header from "../components/Header.component";
import heroImage from "../assets/hero-image.png";
import styles from "../components/styles/HomeScreen.styles";
import Cpressable from "../components/CustomPressable.component";

function HomeScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Header navigator={navigation} />
      <View style={styles.heroArea}>
        <View style={styles.heroAreaInner}>
          <View style={styles.heroAreaText}>
            <Text style={styles.heroTitle}>Litte Lemon</Text>
            <Text style={styles.heroSub}>Chicago</Text>

            <Text style={styles.heroParagraph}>
              We are a family owned Mediterranean restorant focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>
          <View>
            <Image
              style={styles.heroImage}
              source={heroImage}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={"grey"}
            placeholder="Search for food"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text
          style={{ color: "white", fontFamily: "Karla-Regular", fontSize: 18 }}
        >
          Order for delivery!
        </Text>
        <View style={styles.innerButtons}>
          <Cpressable style={styles.buttons}>
            <Text>Starters</Text>
          </Cpressable>
          <Cpressable style={styles.buttons}>
            <Text>Mains</Text>
          </Cpressable>
          <Cpressable style={styles.buttons}>
            <Text>Desserts</Text>
          </Cpressable>
          <Cpressable style={styles.buttons}>
            <Text>Drinks</Text>
          </Cpressable>
        </View>
        <View style={styles.divider}></View>
      </View>
    </View>
  );
}

export default HomeScreen;
