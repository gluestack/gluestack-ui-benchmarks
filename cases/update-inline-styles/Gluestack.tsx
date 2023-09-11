import { styled } from "@gluestack-style/react";
import React from "react";
import { View } from "react-native";
import { COUNT } from "../../utils";

const Box = styled(View, {
  bg: "$yellow500",
  p: "$2",
  m: "$1",
});

const Gluestack = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box
          key={k}
          sx={{
            bg: "$red500",
            p: "$1",
          }}
        />
      ))}
    </>
  );
};

export default Gluestack;
