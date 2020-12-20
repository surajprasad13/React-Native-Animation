import React from "react";

import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MapScreen from "../screens/MapScreen";
import DeckScreen from "../screens/DeckScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ReviewScreen from '../screens/ReviewScreen'


const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

function ReviewStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}


function MainStack() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Map" component={MapScreen} />
      <Bottom.Screen name="Deck" component={DeckScreen} />
      <Bottom.Screen name="Review" component={ReviewStack} />
    </Bottom.Navigator>
  );
}

export default function OnboardingScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
}
