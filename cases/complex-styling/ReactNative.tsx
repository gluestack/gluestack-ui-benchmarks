import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { COUNT } from "../../utils";

const ReactNative = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Pressable key={k} style={[styles.box, styles.solid]} />
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
  solid: {
    backgroundColor: "red",
    padding: 8,
  },
  outlined: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "transparent",
  },
});
