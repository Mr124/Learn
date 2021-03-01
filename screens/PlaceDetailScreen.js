import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PlaceDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navation.getParam("placeTitle"),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlaceDetailScreen;
