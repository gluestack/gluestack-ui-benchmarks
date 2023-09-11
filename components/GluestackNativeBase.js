import {
  GluestackUIProvider,
  config,
  Box,
} from "@gluestack-ui/themed-native-base";
import { View } from "react-native";

// console.log(config, ">>>>>>>");

const GluestackNativeBase = () => {
  return (
    <GluestackUIProvider config={config.theme}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(1000).fill(0).map((_, i) => (
          <Box key={i} p="5" borderWidth="2" borderColor="red.600" />
        ))}
      </View>
    </GluestackUIProvider>
  );
};

export default GluestackNativeBase;
