import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card,Button } from "react-native-elements";
import Deck from "./screens/Deck";

const DATA = [
  {
    id: 1,
    text: "Card 1",
    uri: "https://source.unsplash.com/400x400/?car",
  },
  {
    id: 2,
    text: "Card 2",
    uri: "https://source.unsplash.com/400x400/?flower",
  },
  {
    id: 3,
    text: "Card 3",
    uri: "https://source.unsplash.com/400x400/?animal",
  },
  {
    id: 4,
    text: "Card 4",
    uri: "https://source.unsplash.com/400x400/?fruit",
  },
];

class App extends Component {
  renderCard(item) {
    return (
      <Card key={item.id} >
        <Card.Image source={{ uri: item.uri }} />
        <Text>{item.text}</Text>
        <Button title="View More" type="outline" />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck data={DATA} renderCard={this.renderCard} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
