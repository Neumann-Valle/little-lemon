import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * clears all data in async storage
 */
async function clearCredentials() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
}

export default clearCredentials;
