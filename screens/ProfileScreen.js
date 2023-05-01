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
  const [isSavingEdit, setIsSavingEdits] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [notificationsOptions, setNotificationsOptions] = useState({
    newsletter: false,
    orderstatus: false,
    passwordchange: false,
    specialoffer: false,
  });

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

        // console.log(uData);

        // since we are setting user profile
        // lets access the notificationsOptions
        // object directly
        notificationsOptions.newsletter = Boolean(uData.newsletter);
        notificationsOptions.orderstatus = Boolean(uData.orderstatus);
        notificationsOptions.passwordchange = Boolean(uData.passwordchange);
        notificationsOptions.specialoffer = Boolean(uData.specialoffer);

        setProfileData({ ...uData });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function updateFirstName(str) {
    profileData.firstname = str;
  }

  function updateLastName(str) {
    profileData.lastname = str;
  }

  function updateEmail(str) {
    profileData.email = str;
  }

  function updatePhone(str) {
    profileData.phone = str;
  }

  /**
   * save changes to the database
   */
  function saveChanges() {
    (async () => {
      try {
        // show some intering commponent
        setIsSavingEdits(true);
        // todo make this into a function
        // prepare data sqlite
        const userData = {
          firstname: profileData.firstname,
          lastname: profileData.lastname,
          email: profileData.email,
          phone: profileData.phone,
          orderstatus: notificationsOptions.orderstatus ? 1 : 0,
          passwordchange: notificationsOptions.passwordchange ? 1 : 0,
          specialoffer: notificationsOptions.specialoffer ? 1 : 0,
          newsletter: notificationsOptions.newsletter ? 1 : 0,
        };

        // update the use database
        await updateUserData(userData);
        // pull fresh data
        const uData = await getUserData();
        setProfileData({ ...uData });
        // stop the updating commponent
        setTimeout(() => {
          setIsSavingEdits(false);
        }, 2000);
      } catch (error) {}
    })();
  }

  /**
   * discard all updates
   */
  function discardEdits() {
    (async () => {
      try {
        const uData = await getUserData();
        notificationsOptions.newsletter = Boolean(uData.newsletter);
        notificationsOptions.orderstatus = Boolean(uData.orderstatus);
        notificationsOptions.passwordchange = Boolean(uData.passwordchange);
        notificationsOptions.specialoffer = Boolean(uData.specialoffer);
        setProfileData({ ...uData });
      } catch (error) {
        console.log(error);
      }
    })();
  }

  // todo, do propertly themes
  const Theme = route.params;

  if (isSavingEdit) {
    return (
      <View
        style={{
          backgroundColor: "#121212",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white" }}>Updating profile!</Text>
      </View>
    );
  }

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
            <TextInput
              onChangeText={updateFirstName}
              placeholder={profileData.firstname}
              style={styles.input}
            />
          </View>
          <Text style={styles.profileText}>Last name</Text>
          <View style={styles.inputInner}>
            <TextInput
              onChangeText={updateLastName}
              style={styles.input}
              placeholder={profileData.lastname}
            />
          </View>
          <Text style={styles.profileText}>Email</Text>
          <View style={styles.inputInner}>
            <TextInput
              onChangeText={updateEmail}
              placeholder={profileData.email}
              style={styles.input}
            />
          </View>
          <Text style={styles.profileText}>Phone number</Text>
          <View style={styles.inputInner}>
            <TextInput
              style={styles.input}
              onChangeText={updatePhone}
              placeholder={profileData.phone || "US phone"}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.notifications}>
          <Text style={styles.emailNotificationSub}>Email notifications</Text>
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={notificationsOptions.orderstatus}
              onValueChange={() => {
                notificationsOptions.orderstatus =
                  !notificationsOptions.orderstatus;
                setNotificationsOptions({ ...notificationsOptions });
              }}
            />
            <Text style={styles.profileText}>Order status</Text>
          </View>

          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={notificationsOptions.passwordchange}
              onValueChange={() => {
                notificationsOptions.passwordchange =
                  !notificationsOptions.passwordchange;
                setNotificationsOptions({ ...notificationsOptions });
              }}
            />
            <Text style={styles.profileText}>Password changes</Text>
          </View>

          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={notificationsOptions.specialoffer}
              onValueChange={() => {
                notificationsOptions.specialoffer =
                  !notificationsOptions.specialoffer;
                setNotificationsOptions({ ...notificationsOptions });
              }}
            />
            <Text style={styles.profileText}>Special offers</Text>
          </View>

          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={notificationsOptions.newsletter}
              onValueChange={() => {
                notificationsOptions.newsletter =
                  !notificationsOptions.newsletter;
                setNotificationsOptions({ ...notificationsOptions });
              }}
            />
            <Text style={styles.profileText}>Newsletter</Text>
          </View>
        </View>
        <Pressable style={styles.logoutButton}>
          <Text style={styles.buttonText}>Log Out</Text>
        </Pressable>
        <View style={styles.doubleButton}>
          <Pressable style={styles.buttonDiscard} onPress={discardEdits}>
            <Text style={styles.buttonText}>Discard changed</Text>
          </Pressable>
          <Pressable style={styles.buttonSave} onPress={saveChanges}>
            <Text style={styles.buttonText}>Save changes</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;
