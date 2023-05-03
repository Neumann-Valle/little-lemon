import { useEffect, useState } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import fetchCredentials from "./utilities/fetch.credentials";
import ProfileScreen from "./screens/ProfileScreen";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Markazy-Text": require("./assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
  });

  const [onboardingDone, setOnboardingDone] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetchCredentials();
      if (res.logged) {
        setOnboardingDone(true);
      }
      setLoading(false);
    })();
  }, []);

  const props = {
    name: "Onboarding",
  };

  if (onboardingDone) {
    props.name = "Home";
  }

  if (!fontsLoaded) {
    return null;
  }

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName={props.name}>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          initialParams={DarkTheme}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={DarkTheme}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={DarkTheme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
