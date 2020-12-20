import React from "react";

import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MapScreen from "../screens/MapScreen";
import DeckScreen from "../screens/Main";
import SettingsScreen from "../screens/SettingsScreen";
import ReviewScreen from "../screens/ReviewScreen";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

function ReviewStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Bottom.Navigator
      tabBarOptions={{
        activeTintColor: "#e91e63",
        inactiveTintColor: "#a4d4e4",
        allowFontScaling: true,
      }}
    >
      <Bottom.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="map" type="Entypo" color={color} size={size} />,
          tabBarBadge: 2,
          tabBarBadgeStyle: { backgroundColor: "green" },
        }}
      />
      <Bottom.Screen
        name="Deck"
        component={DeckScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="map" type="Entypo" color={color} size={size} />,
        }}
      />
      <Bottom.Screen
        name="Review"
        component={ReviewStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="map" type="Entypo" color={color} size={size} />,
        }}
      />
    </Bottom.Navigator>
  );
}

export default function OnboardingScreen() {
  return (
    <Stack.Navigator initialRouteName="Main" mode="card" headerMode="none">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
}
