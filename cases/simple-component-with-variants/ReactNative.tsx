import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { COUNT } from "../../utils";

const ReactNative = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <View key={k} style={styles.box} />
      ))}
    </>
  );
};

export default ReactNative;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "yellow",
    padding: 8,
    margin: 4,
  },
});
