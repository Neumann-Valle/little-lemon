import { useEffect, useState } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createUserTable } from "./utilities/user.database";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import fetchCredentials from "./utilities/fetch.credentials";
import ProfileScreen from "./screens/ProfileScreen";
import { useFonts } from "expo-font";
import { createDishesTable } from "./utilities/dishes.database";
import { AppContext } from "./components/AppContext.component";

const Stack = createNativeStackNavigator();

createUserTable();
createDishesTable();

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

  if (!fontsLoaded) {
    return null;
  }

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <AppContext.Provider
      value={{ setOnboardingState: setOnboardingDone, loading: loading }}
    >
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          {onboardingDone ? (
            <>
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
            </>
          ) : (
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              initialParams={{ DarkTheme }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
