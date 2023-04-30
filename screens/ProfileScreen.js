import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "../components/styles/Profile.style";
import Checkbox from "expo-checkbox";
import { ImageBackground } from "react-native";
import profilePic from "../assets/Profile.png";

function ProfileScreen({ route, navigation }) {
  useEffect(() => {}, []);
  // todo, do propertly themes
  const Theme = route.params;

  return (
    <ScrollView>
    <View style={styles.profileContainer}>
      <View style={styles.headerSub}>
        <Text style={styles.emailNotificationSub}>Personal information</Text>
        <Text style={styles.profileText}>Avatar</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image style={styles.profileAvatar} source={profilePic} />

        <Pressable style={styles.avatarButtonChange}>
          <Text style={styles.avatarButtonText}>Change</Text>
        </Pressable>
        <Pressable style={styles.avatarButtonRemove}>
          <Text style={styles.avatarButtonText}>Remove</Text>
        </Pressable>
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
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={null}
            onValueChange={() => {}}
          />
          <Text style={styles.profileText}>Order status</Text>
        </View>

        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={null}
            onValueChange={() => {}}
          />
          <Text style={styles.profileText}>Password changes</Text>
        </View>

        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={null}
            onValueChange={() => {}}
          />
          <Text style={styles.profileText}>Special offers</Text>
        </View>

        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={null}
            onValueChange={() => {}}
          />
          <Text style={styles.profileText}>Newsletter</Text>
        </View>
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
    </ScrollView>
  );
}

export default ProfileScreen;
