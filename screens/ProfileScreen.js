import * as React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "../components/styles/Profile.style";

function ProfileScreen({ route, navigation }) {
  // todo, do propertly themes
  const Theme = route.params;

  return (
    <View style={styles.profileContainer}>
      <View style={styles.headerSub}>
        <Text style={styles.emailNotificationSub}>Personal information</Text>
        <Text style={styles.profileText}>Avatar</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.profileText}>First name</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <Text style={styles.profileText}>Last name</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <Text style={styles.profileText}>Email</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
        <Text style={styles.profileText}>Phone number</Text>
        <View style={styles.input}>
          <TextInput />
        </View>
      </View>

      <View style={styles.notifications}>
        <Text style={styles.emailNotificationSub}>Email notifications</Text>
        <Text style={styles.profileText}>Order status</Text>
        <Text style={styles.profileText}>Password changes</Text>
        <Text style={styles.profileText}>Special offers</Text>
        <Text style={styles.profileText}>Newsletter</Text>
      </View>
      <Pressable style={styles.logoutButton}>
        <Text style={styles.buttonText}>Log Out</Text>
      </Pressable>
      <View style={styles.doubleButton}>
        <Pressable style={styles.buttonDiscard}>
          <Text style={styles.buttonText}>Discard changed</Text>
        </Pressable>
        <Pressable style={styles.buttonSave}>
          <Text style={styles.buttonText}>Save changes</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ProfileScreen;
