import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MapScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MapScreen;
