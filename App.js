import { useEffect, useState } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import fetchCredentials from "./utilities/fetch.credentials";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [onboardingDone, setOnboardingDone] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await fetchCredentials();
      if (res.logged) {
        setOnboardingDone(true);
      }
    })();
  }, []);

  const props = {
    name: "Onboarding",
    component: OnboardingScreen,
  };

  if (onboardingDone) {
    (props.name = "Profile"), (props.component = ProfileScreen);
  }

  if (!onboardingDone) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={props.name}
          component={props.component}
          initialParams={DarkTheme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
