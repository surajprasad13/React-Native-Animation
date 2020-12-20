import AsyncStorage from "@react-native-community/async-storage";
import { Permissions, Notifications } from "expo";

import axios from 'axios'

const PUSH_ENDPOINT='http://rallycoding.herokuapp.com/api/tokens';



export default async () => {
  let previoustoken = "token";
  if (previoustoken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

    if (status !== "granted") {
      return;
    }

    let token = await Notifications.getExponentPushTokenAsync();
    await axios.post(PUSH_ENDPOINT,{token:{token}})
    AsyncStorage.setItem('pushtoken',token)
  }
};
