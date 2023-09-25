import { Factory } from "native-base";
import React from "react";
import { View } from "react-native";
import { COUNT } from "../../utils";

const Box = Factory(View, {
  baseStyle: {
    bg: "yellow.500",
    p: "2",
    m: "1",
  },
});

const NativeBase = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box key={k} />
      ))}
    </>
  );
};

export default NativeBase;
