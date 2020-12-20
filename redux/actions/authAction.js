import AsyncStorage from "@react-native-community/async-storage";
import { FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS } from "./types";
import { Facebook } from "expo";

export const facebookLogin = () => async (dispatch) => {
  let token = await AsyncStorage.getItem("fb_token");
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async () => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync("options", {
    permissions: ["public_profile"],
  });

  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem("fb_token");

  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
