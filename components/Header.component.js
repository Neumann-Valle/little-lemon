import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import UserAvatar from "react-native-user-avatar";
import Logo from "../assets/Logo.png";
import { getUserData } from "../utilities/database";
import fetchCredentials from "../utilities/fetch.credentials";

function Header() {
  useEffect(() => {
    (async () => {
      try {
        // console.log(await fetchCredentials());
        const uData = await getUserData();
        console.log(uData || 'nothing to show');
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Header</Text>
    </View>
  );
}

export default Header;
