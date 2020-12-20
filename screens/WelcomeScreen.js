import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  {
    text: "Welcome John",
    color: "#03A9D4",
  },
  {
    text: "Set your location then swipe away",
    color: "#009688",
  },
  {
    text: "use this to get a job",
    color: "#03A9F4",
  },
];

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <Slides data={SLIDE_DATA} onComplete={() => navigation.navigate("Auth")} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
