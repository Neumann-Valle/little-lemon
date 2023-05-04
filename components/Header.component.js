import { useEffect, useState } from "react";
import { View, Text,Image } from "react-native";
import UserAvatar from "react-native-user-avatar";
import logo from "../assets/Logo.png";
import { getUserData } from "../utilities/database";
import fetchCredentials from "../utilities/fetch.credentials";

function Header() {

  const [loginData, setLoginData] = useState({});


  useEffect(() => {
    (async () => {
      try {
        const uData = await fetchCredentials();

        if(uData.logged){
          setLoginData({...loginData, firstname: uData.lastname});
        }

        console.log(uData);
        // const uData = await getUserData();
        // console.log(uData || 'nothing to show');
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={{ width: '80%', flexDirection: 'row', alignItems:'center',justifyContent:'flex-end'}}>
      <Image source={logo} resizeMode="cover" />
      <UserAvatar
        size={64}
        name={`${loginData.firstname} ${loginData.lastname}`}
        bgColor="#000"
      />
    </View>
  );
}

export default Header;
