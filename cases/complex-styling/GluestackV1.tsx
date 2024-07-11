import { styled } from "@gluestack-ui/themed";
import React from "react";
import { Pressable } from "react-native";
import { COUNT } from "../../utils";

const Button = styled(Pressable, {
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

const Gluestack = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Button
          key={k}
          states={{
            hover: true,
            active: true,
            focus: true,
          }}
          variant="solid"
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
