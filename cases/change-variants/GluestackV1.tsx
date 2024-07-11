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
        bg: "$red500",
        p: "$2",
      },
      outlined: {
        borderWidth: "$1",
        borderColor: "$red500",
        bg: "transparent",
      },
    },
  },
});

const Gluestack = ({ toggleVariant }: { toggleVariant?: boolean }) => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box key={k} variant={toggleVariant ? "outlined" : "solid"} />
      ))}
    </>
  );
};

export default Gluestack;
