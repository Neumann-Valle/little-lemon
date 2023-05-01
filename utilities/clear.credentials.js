import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * if we have been logged return
 * credentials and a logged flag as true
 * otherwise an 'error' member is populated
 * @returns Object
 */
async function clearCredentials() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
}

export default clearCredentials;
