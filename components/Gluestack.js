/* initialized with npx gluestack-ui@latest */
import { Pressable, Text, View } from "react-native";
// import { createProvider } from "@gluestack-ui/provider";
import { styled, StyledProvider } from "@gluestack-style/react";

import { GluestackUIProvider, Button, config } from "@gluestack-ui/themed";
// import { config } from "../gluestack-ui.config";
import { createButton } from "@gluestack-ui/button";

// const MyButton = () => {
//   return ButtonCreated.
// }
import { COUNT, WITH_INLINE_PROPS } from "../../utils";
import { ButtonCreated } from "../my-comp";
import { useState } from "react";
// import { styled } from "../styles/gluestack-styled";

// const GluestackUIStyledProvider = createProvider({ StyledProvider });

// const GluestackUIProvider = ({ children, ...props }) => {
//   return (
//     <GluestackUIStyledProvider {...props}>{children}</GluestackUIStyledProvider>
//   );
// };

const Gluestack = ({ click = false }) => {
  return (
    <GluestackUIProvider config={config.theme}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Button
            key={i}
            variant={click ? "outline" : "solid"}
            sx={
              {
                // bg: "$amber500",
                // p: "$2",
                // m: "$1",
                // borderRadius: "$sm",
                // backgroundColor: "$primary500",
                // flexDirection: "row",
                // justifyContent: "center",
                // alignItems: "center",
                // _dark: {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // ":hover": {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // ":active": {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // ":focused": {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // _text: {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // _icon: {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // _spinner: {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
              }
            }
          />
        ))}
      </View>
    </GluestackUIProvider>
  );
};

export default Gluestack;
