import { Notifications } from "expo";
import React, { Component } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import registerForNotifications from "./services/push_notification";
import store from "./redux/store";
import { Provider } from "react-redux";


import Screens from "./navigation/Screen";

class App extends Component {
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {
      const {
        data: { text },
        origin,
      } = notification;

      if (origin === "received" && text) {
        Alert.alert("New Push Notification", text, [{ text: "ÓK." }]);
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
