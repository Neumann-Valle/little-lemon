import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import {
  createTable,
  getUserData,
  saveUserData,
  updateUserData,
} from "../utilities/database";
import styles from "../components/styles/Profile.style";
import Checkbox from "expo-checkbox";
import { ImageBackground } from "react-native";
import profilePic from "../assets/Profile.png";
import fetchCredentials from "../utilities/fetch.credentials";

createTable();

function ProfileScreen({ route, navigation }) {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        // create table
        await createTable();
        const onboardingData = await fetchCredentials();
        let uData = await getUserData();

        // we got no user in database
        // lets create some default with
        // onboarding data, dunno why
        // they made us do async storage
        // if we anyways gonna do the sqlite
        if (!uData) {
          const userData = {
            firstname: onboardingData.lastname,
            lastname: "none",
            email: onboardingData.email,
            phone: "3230000090",
            orderstatus: 1,
            passwordchange: 1,
            specialoffer: 0,
            newsletter: 0,
          };
          await saveUserData(userData);
          uData = await getUserData();
        }

        console.log(uData);

        setProfileData({ ...uData });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
          <View style={styles.inputInner}>
            <TextInput value={profileData.firstname} style={styles.input} />
          </View>
          <Text style={styles.profileText}>Last name</Text>
          <View style={styles.inputInner}>
            <TextInput style={styles.input} />
          </View>
          <Text style={styles.profileText}>Email</Text>
          <View style={styles.inputInner}>
            <TextInput
              value={profileData.email}
              placeholder={"Email"}
              style={styles.input}
            />
          </View>
          <Text style={styles.profileText}>Phone number</Text>
          <View style={styles.inputInner}>
            <TextInput style={styles.input} />
          </View>
        </View>

        <View style={styles.notifications}>
          <Text style={styles.emailNotificationSub}>Email notifications</Text>
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={profileData.orderstatus}
              onValueChange={() => {}}
            />
            <Text style={styles.profileText}>Order status</Text>
          </View>

          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={profileData.passwordchange}
              onValueChange={() => {}}
            />
            <Text style={styles.profileText}>Password changes</Text>
          </View>

          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={profileData.specialoffer}
              onValueChange={() => {}}
            />
            <Text style={styles.profileText}>Special offers</Text>
          </View>

          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={profileData.newsletter}
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
