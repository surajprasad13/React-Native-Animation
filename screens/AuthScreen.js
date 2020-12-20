import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import { connect } from "react-redux";
import { facebookLogin } from "../redux/actions/authAction";

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete();
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete() {
    const { token } = this.props;
    if (token) {
      this.props.navigation.navigate("Main");
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>AuthScreen</Text>
        <Button title="Go" onPress={() => navigation.navigate("Main")} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { facebookLogin })(AuthScreen);
