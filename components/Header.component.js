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
      try {
        const uData = await fetchCredentials();

        if (uData.logged) {
          setLoginData({ ...loginData, firstname: uData.lastname });
        }

        // console.log(uData);
        // const uData = await getUserData();
        // console.log(uData || 'nothing to show');
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function navigateToHome() {
    props.navigator.navigate("Home");
  }

  function navigateToProfile() {
    props.navigator.navigate("Profile");
  }

  return (
    <View style={styles.container}>
      <Cpressable onPress={navigateToHome} activeOpacity={0.5}>
        <Image source={logo} resizeMode="cover" />
      </Cpressable>
      <Cpressable onPress={navigateToProfile} activeOpacity={0.5} style={styles.avatarButton}>
        <UserAvatar
          size={64}
          name={`${loginData.firstname} ${loginData.lastname}`}
          bgColor="black"
        />
      </Cpressable>
    </View>
  );
}

export default Header;
