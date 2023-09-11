import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { COUNT } from "../../utils";

const ReactNative = ({ toggleVariant }: { toggleVariant: boolean }) => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <View
          key={k}
          style={[
            styles.box,
            toggleVariant ? styles.outlined : {},
            !toggleVariant ? styles.solid : {},
          ]}
        />
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
