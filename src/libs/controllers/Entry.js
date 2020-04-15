import { AsyncStorage } from "react-native";

export const getUserToken = async () => {
  const userToken = await AsyncStorage.getItem('userTokesn');
  return userToken;
}

export const getEntryRoute = () => {
  if (getUserToken) {
    return '/dashboard'
  } else {
    return '/entry'
  }
};
