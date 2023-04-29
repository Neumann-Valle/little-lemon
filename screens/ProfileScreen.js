import { useFonts } from "expo-font";
import * as React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "../components/styles/Profile.style";

function ProfileScreen({ route, navigation }) {
  const [fontsLoaded] = useFonts({
    "Markazy-Text": require("../assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Theme = route.params;

  return (
    <View style={styles.profileContainer}>
      <View style={styles.headerSub}>
        <Text style={{ color: Theme.colors.text }}>Personal information</Text>
        <Text style={{ color: Theme.colors.text }}>Avatar</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ color: Theme.colors.text }}>First name</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <Text style={{ color: Theme.colors.text }}>Last name</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <Text style={{ color: Theme.colors.text }}>Email</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <Text style={{ color: Theme.colors.text }}>Phone number</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
      </View>

      <View style={styles.notifications}>
        <Text style={{ color: Theme.colors.text }}>First name</Text>
        <Text style={{ color: Theme.colors.text }}>Last name</Text>
        <Text style={{ color: Theme.colors.text }}>Email</Text>
        <Text style={{ color: Theme.colors.text }}>Phone number</Text>
      </View>
      <Pressable style={styles.logoutButton}>
        <Text>Log Out</Text>
      </Pressable>
      <View style={styles.doubleButton}>
        <Pressable style={styles.buttonDiscard}>
          <Text>Discard changed</Text>
        </Pressable>
        <Pressable style={styles.buttonSave}>
          <Text>Save changes</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ProfileScreen;
