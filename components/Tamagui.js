import React from "react";
import { View } from "react-native";
import { TamaguiProvider, styled, Button } from "tamagui";

const Box = styled(View, {
  // p: 5,
  // borderWidth: 2,
  // borderColor: "$red6Light",
});

import config from "../tamagui.config";
import { COUNT, WITH_INLINE_PROPS } from "../../utils";

const styles = {
  bc: "$yellow4Light",
  padding: "$2",
  m: "$1",
};

const Tamagui = ({ click = true }) => {
  return (
    <TamaguiProvider config={config}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Button
            key={i}
            variant={click ? "outlined" : ""}
            bc="$yellow4Light"
            // padding="$2"
            // m="$1"
            // hoverStyle={{
            //   bc: "$yellow4Light",
            //   padding: "$2",
            //   m: "$1",
            // }}
            // pressStyle={{
            //   bc: "$yellow4Light",
            //   padding: "$2",
            //   m: "$1",
            // }}
            // focusStyle={{
            //   bc: "$yellow4Light",
            //   padding: "$2",
            //   m: "$1",
            // }}
          />
        ))}
      </View>
    </TamaguiProvider>
  );
};

export default Tamagui;
