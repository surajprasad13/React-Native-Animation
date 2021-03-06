import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import DeckScreen from "./DeckScreen";

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

class Main extends Component {
  renderCard(item, index) {
    return (
      <Card key={item.id}>
        <Card.Image source={{ uri: item.uri }} />
        <Text>{item.text}</Text>
        <Button title="View More" type="outline" />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card>
        <Card.Title>All Done</Card.Title>
        <Text>There is no more card</Text>
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <DeckScreen data={DATA} renderCard={this.renderCard} renderNoMoreCards={this.renderNoMoreCards} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
