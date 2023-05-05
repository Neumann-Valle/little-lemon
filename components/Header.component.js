import { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import UserAvatar from "react-native-user-avatar";
import logo from "../assets/Logo.png";
import { getUserData } from "../utilities/database";
import styles from "./styles/Header.component.style";
import Cpressable from "../components/CustomPressable.component";
import fetchCredentials from "../utilities/fetch.credentials";

function Header(props) {
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    (async () => {
      fetchRemoteData();
    })();
  }, []);

  useEffect(() => {
    const focusHandler = props.navigator.addListener("focus", () => {
      fetchRemoteData();
    });

    return focusHandler;
  }, [props.navigator]);

  async function fetchRemoteData() {
    try {
      let uData = await fetchCredentials();
      if (uData.logged) {
        const udbData = await getUserData();

        if (udbData) {
          uData = udbData;
        }

        setLoginData({ ...uData });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function navigateToHome() {
    props.navigator.navigate("Home");
  }

  function navigateToProfile() {
    props.navigator.navigate("Profile");
  }

  // console.log(loginData);

  const avatar =
    typeof loginData.avatar !== "object" && loginData.avatar !== "null" ? (
      <Image style={styles.profileAvatar} source={{ uri: loginData.avatar }} />
    ) : (
      <UserAvatar
        size={64}
        name={
          loginData.lastname !== ""
            ? `${loginData.firstname} ${loginData.lastname}`
            : loginData.firstname
        }
        bgColor="#000"
      />
    );

  return (
    <View style={styles.container}>
      <Cpressable onPress={navigateToHome} activeOpacity={0.5}>
        <Image source={logo} resizeMode="cover" />
      </Cpressable>
      <Cpressable
        onPress={navigateToProfile}
        activeOpacity={0.5}
        style={styles.avatarButton}
      >
        {avatar}
      </Cpressable>
    </View>
  );
}

export default Header;
