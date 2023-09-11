import { styled } from "tamagui";
import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { COUNT } from "../../utils";

const Box = styled(View, {
  bc: "$yellow5Light",
  p: "$2",
  m: "$1",
  variants: {
    variant: {
      solid: {
        bc: "$red5Light",
        p: "$2",
      },
      outlined: {
        borderWidth: "$1",
        borderColor: "$red5Light",
        bc: "transparent",
      },
    },
  },
});

const Tamagui = ({ toggleVariant }: { toggleVariant?: boolean }) => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box key={k} variant={toggleVariant ? "outlined" : "solid"} />
      ))}
    </>
  );
};

export default Tamagui;
