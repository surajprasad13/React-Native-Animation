import React, { Component } from "react";

import { View, Animated, PanResponder, Dimensions, StyleSheet, LayoutAnimation, UIManager } from "react-native";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 0.25 * width;
const SWIPE_OUT_DURATION = 250;

class DeckScreen extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {},
  };

  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe("right");
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe("left");
        } else {
          this.resetPosition();
        }
      },
    });

    this.state = { panResponder, position, index: 0 };
  }

  // static getDerivedStateFromProps(nextProps) {
  //   if (nextProps.data !== this.props.data) {
  //     this.setState({ index: 0 });
  //   }
  // }

  componentDidUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  forceSwipe(direction) {
    const x = direction === "right" ? width : -width;
    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;

    const item = data[this.state.index];

    direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
    }).start();
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-width * 1.5, 0, width * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...this.state.position.getLayout(),
      transform: [{ rotate }],
    };
  }

  renderCards() {
    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }

    return this.props.data
      .map((item, i) => {
        if (i < this.state.index) {
          return null;
        }
        if (i === this.state.index) {
          return (
            <Animated.View
              key={item.id}
              style={[this.getCardStyle(), styles.cardStyle]}
              {...this.state.panResponder.panHandlers}
            >
              {this.props.renderCard(item)}
            </Animated.View>
          );
        }
        return (
          <Animated.View key={item.id} style={[styles.cardStyle, { top: 10 * (i - this.state.index) }]}>
            {this.props.renderCard(item)}
          </Animated.View>
        );
      })
      .reverse();
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    position: "absolute",
    width: width,
  },
});

export default DeckScreen;
