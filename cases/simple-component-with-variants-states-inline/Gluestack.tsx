import { styled } from "@gluestack-ui/themed";
import React from "react";
import { View, Text } from "react-native";
import { COUNT } from "../../utils";

const Box = styled(View, {
  bg: "$yellow500",
  p: "$2",
  m: "$1",
  variants: {
    variant: {
      solid: {
        bg: "$amber100",
        p: "$2",
        m: "$1",
      },
    },
  },
  ":hover": {
    bg: "$blue400",
  },
});

const Gluestack = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box key={k} variant="solid" states={{ hover: true }} bg="$purple500" />
      ))}
    </>
  );
};

export default Gluestack;
