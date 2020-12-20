import _ from "lodash";
import React, { Component } from "react";
import { AppLoading } from "expo";

import Slides from "../components/Slides";
import AsyncStorage from "@react-native-community/async-storage";

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

class WelcomeScreen extends Component {
  state = { token: null };

  async componentDidMount() {
    let token = await AsyncStorage.getItem("fb_token");
    if (token) {
      this.props.navigation.navigate("Main");
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  render() {
    const {navigation}=this.props
    // if (_.isNull(this.state.token)) {
    //   return <AppLoading />;
    // }
    return (
      <>
        <Slides data={SLIDE_DATA} onComplete={() => navigation.navigate("Auth")} />
      </>
    );
  }
}

export default WelcomeScreen;
