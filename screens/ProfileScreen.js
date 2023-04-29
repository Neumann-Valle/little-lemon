import * as React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "../components/styles/Profile.style";
import Ctext from '../components/CustomText.component'

function ProfileScreen({ route, navigation }) {
  // todo, do propertly themes
  const Theme = route.params;


  return (
    <View style={styles.profileContainer}>
      <View style={styles.headerSub}>
        <Ctext style={{ fontFamily: 'Markazy-Text', color: 'green', fontSize: 25 }} content={'Personal information'} />
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
