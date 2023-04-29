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

  // todo, do propertly themes
  const Theme = route.params;

  return (
    <View style={styles.profileContainer}>
      <View style={styles.headerSub}>
        <Text style={styles.profileColorText}>Personal information</Text>
        <Text style={styles.profileColorText}>Avatar</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.profileColorText}>First name</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <Text style={styles.profileColorText}>Last name</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <Text style={styles.profileColorText}>Email</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <Text style={styles.profileColorText}>Phone number</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
      </View>

      <View style={styles.notifications}>
        <Text style={styles.profileColorText}>First name</Text>
        <Text style={styles.profileColorText}>Last name</Text>
        <Text style={styles.profileColorText}>Email</Text>
        <Text style={styles.profileColorText}>Phone number</Text>
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
