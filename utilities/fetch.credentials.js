import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * if we have been logged return
 * credentials and a logged flag as true
 * otherwise an 'error' member is populated
 * @returns Object
 */
async function fetchCredentials() {
  const response = {};
  response.logged = false; //default state
  response.error;

  try {
    response.firstname = await AsyncStorage.getItem("firstname");
    response.email = await AsyncStorage.getItem("email");
    if (response.firstname && response.email) {
      response.logged = true;
    }
  } catch (e) {
    response.error = e;
  }
  return response;
}

export default fetchCredentials;
