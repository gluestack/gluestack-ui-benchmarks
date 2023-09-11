import { Factory } from "native-base";
import React from "react";
import { View } from "react-native";
import { COUNT } from "../../utils";

const Box = Factory(View, {
  baseStyle: {
    bg: "yellow.500",
    p: "2",
    m: "1",
    _hover: {
      bg: "yellow.500",
    },
    _pressed: {
      bg: "yellow.600",
    },
    _focus: {
      bg: "yellow.700",
    },
  },
  variants: {
    solid: {
      bg: "red.500",
      p: "2",
      _hover: {
        bg: "red.500",
      },
      _pressed: {
        bg: "red.600",
      },
      _focus: {
        bg: "red.700",
      },
    },
    outlined: {
      borderWidth: "1",
      borderColor: "red.500",
      bg: "transparent",
      _hover: {
        bg: "red.500",
      },
      _pressed: {
        bg: "red.600",
      },
      _focus: {
        bg: "red.700",
      },
    },
  },
});

const NativeBase = ({ toggleVariant }: { toggleVariant?: boolean }) => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box key={k} variant={toggleVariant ? "outlined" : "solid"} />
      ))}
    </>
  );
};

export default NativeBase;
