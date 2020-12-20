import React, { Component } from "react";
import { Text, ScrollView, View, Dimensions } from "react-native";

import { Button } from "react-native-elements";

const { width } = Dimensions.get("window");

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return <Button title="onwards" raised onPress={this.props.onComplete} />;
    }
  }

  renderSlides() {
    const { data } = this.props;
    return data.map((slide, index) => {
      return (
        <View key={index} style={[styles.slideStyle, { backgroundColor: slide.color }]}>
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal={true} style={{ flex: 1 }} pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  slideText: {
    fontSize: 20,
    color: "white",
  },
};

export default Slides;
