import React, { Component } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";
import { facebookLogin } from "../redux/actions/authAction";

class AuthScreen extends Component {

  componentDidMount(){
    this.props.facebookLogin()
  }

  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.token,
});

export default connect(null,{facebookLogin})(AuthScreen);
