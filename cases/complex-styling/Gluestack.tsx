import { styled } from "@gluestack-style/react";
import React from "react";
import { View, Text } from "react-native";
import { COUNT } from "../../utils";

const Box = styled(View, {
  bg: "$yellow500",
  p: "$2",
  m: "$1",
  ":hover": {
    bg: "$yellow600",
  },
  ":active": {
    bg: "$yellow700",
  },
  ":focus": {
    bg: "$yellow800",
  },
  variants: {
    variant: {
      solid: {
        bg: "$red500",
        p: "$2",
        ":hover": {
          bg: "$red600",
        },
        ":active": {
          bg: "$red700",
        },
        ":focus": {
          bg: "$red800",
        },
      },
      outlined: {
        borderWidth: "$1",
        borderColor: "$red500",
        bg: "transparent",
        ":hover": {
          bg: "$red600",
        },
        ":active": {
          bg: "$red700",
        },
        ":focus": {
          bg: "$red800",
        },
      },
    },
  },
});

const Gluestack = ({ toggleVariant }: { toggleVariant?: boolean }) => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box
          key={k}
          variant={toggleVariant ? "outlined" : "solid"}
          sx={{
            ":hover": {
              bg: "$violet600",
            },
            ":active": {
              bg: "$violet700",
            },
            ":focus": {
              bg: "$violet800",
            },
          }}
        />
      ))}
    </>
  );
};

export default Gluestack;
