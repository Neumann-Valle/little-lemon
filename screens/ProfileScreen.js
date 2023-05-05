import { useEffect, useState } from "react";
import styles from "../components/styles/Profile.style";
import Checkbox from "expo-checkbox";
import fetchCredentials from "../utilities/fetch.credentials";
import clearCredentials from "../utilities/clear.credentials";
import * as ImagePicker from "expo-image-picker";
import storeCredentials from "../utilities/storage.store.credentials";
import isvalid_email from "../utilities/validate.email";
import isvalid_Name from "../utilities/validate.name";
import Cpressable from "../components/CustomPressable.component";
import UserAvatar from "react-native-user-avatar";
import { View, Text, TextInput, Image, ScrollView } from "react-native";
import {
  createTable,
  getUserData,
  saveUserData,
  updateUserData,
  deleteUser,
} from "../utilities/database";

function ProfileScreen({ route, navigation }) {
  const [isSavingEdit, setIsSavingEdits] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [notificationsOptions, setNotificationsOptions] = useState({
    newsletter: false,
    orderstatus: false,
    passwordchange: false,
    specialoffer: false,
  });
  // track name and email are spected requirements
  const [nameEmailerror, setNameEmailerror] = useState({
    name: false,
    email: false,
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
            firstname: onboardingData.firstname,
            lastname: "",
            email: onboardingData.email,
            phone: "",
            orderstatus: 0,
            passwordchange: 0,
            specialoffer: 0,
            newsletter: 0,
            avatar: "",
          };
          await saveUserData(userData);
          uData = await getUserData();
        }

        // since we are setting user profile
        // lets access the notificationsOptions
        // object directly
        notificationsOptions.newsletter = Boolean(uData.newsletter);
        notificationsOptions.orderstatus = Boolean(uData.orderstatus);
        notificationsOptions.passwordchange = Boolean(uData.passwordchange);
        notificationsOptions.specialoffer = Boolean(uData.specialoffer);

        // console.log(uData);

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

  function resetAvatar() {
    setProfileData({ ...profileData, avatar: "null" });
  }

  function doLogout() {
    deleteUser();
    clearCredentials();
    navigation.navigate("Onboarding");
  }

  /**
   * save changes to the database
   */
  function saveChanges() {
    (async () => {
      try {
        const email_isvalid = isvalid_email(profileData.email);
        const name_isvalid = isvalid_Name(profileData.firstname);

        if (!email_isvalid || !name_isvalid) {
          setNameEmailerror({
            ...nameEmailerror,
            email: !email_isvalid,
            name: !name_isvalid,
          });
          setTimeout(() => {
            setNameEmailerror({ ...nameEmailerror, email: false, name: false });
          }, 500);
          return;
        }
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
          avatar: profileData.avatar,
        };

        // save in the async storage
        // todo, just bound to sqlite
        storeCredentials(profileData.firstname, profileData.email);

        // update the use database
        await updateUserData(userData);
        // pull fresh data
        const uData = await getUserData();
        setProfileData({ ...uData });
        // stop the updating commponent
        setTimeout(() => {
          setIsSavingEdits(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
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
        setProfileData({ ...uData, avatar: null });
      } catch (error) {
        console.log(error);
      }
    })();
  }

  async function imagePicker() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileData({ ...profileData, avatar: result.assets[0].uri });
    }
  }

  // todo, do propertly themes
  const Theme = route.params;

  const avatar =
    typeof profileData.avatar !== "object" && profileData.avatar !== "null" ? (
      <Image
        style={styles.profileAvatar}
        source={{ uri: profileData.avatar }}
      />
    ) : (
      <UserAvatar
        size={styles.profileAvatar.height}
        name={
          profileData.lastname !== ""
            ? `${profileData.firstname} ${profileData.lastname}`
            : profileData.firstname
        }
        bgColor="#000"
      />
    );

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
          {avatar}
          <Cpressable
            style={styles.avatarButtonChange}
            onPress={imagePicker}
            activeOpacity={0.5}
          >
            <Text style={styles.avatarButtonText}>Change</Text>
          </Cpressable>
          <Cpressable
            style={styles.avatarButtonRemove}
            onPress={resetAvatar}
            activeOpacity={0.5}
          >
            <Text style={styles.avatarButtonText}>Remove</Text>
          </Cpressable>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.profileText}>First name</Text>
          <View
            style={nameEmailerror.name ? styles.inputErr : styles.inputInner}
          >
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
          <View
            style={nameEmailerror.email ? styles.inputErr : styles.inputInner}
          >
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
        <Cpressable
          style={styles.logoutButton}
          onPress={doLogout}
          activeOpacity={0.5}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </Cpressable>
        <View style={styles.doubleButton}>
          <Cpressable
            style={styles.buttonDiscard}
            onPress={discardEdits}
            activeOpacity={0.5}
          >
            <Text style={styles.buttonText}>Discard changed</Text>
          </Cpressable>
          <Cpressable
            style={styles.buttonSave}
            onPress={saveChanges}
            activeOpacity={0.5}
          >
            <Text style={styles.buttonText}>Save changes</Text>
          </Cpressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;
