import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from "react-native";

import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");

class MapScreen extends Component {
  state = {
    mapLoaded:false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
  };

  render() {
    if(this.state.mapLoaded){
      return (
        <View style={{flex:1,justifyContent:"center"}} >
          <ActivityIndicator  size="large"  />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <MapView region={this.state.region} style={styles.map} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  map: {
    width: width,
    height: height,
  },
});

export default MapScreen;
