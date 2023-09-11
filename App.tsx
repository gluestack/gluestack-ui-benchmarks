import { useFonts } from "expo-font";
import NavigationProvider from "./navigation/NavigationProvider";
import HomeScreen from "./HomeScreen";
import {
  ChangeVariants,
  LayoutScreen,
  SimpleComponent,
  UpdateInlineStyles,
} from "./cases";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "./gluestack-ui.config";
import TMConfig from "./tamagui.config";
import { TamaguiProvider } from "tamagui";
import { NativeBaseProvider } from "native-base";
import ComplexStyling from "./cases/complex-styling";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <TamaguiProvider config={TMConfig}>
        <StyledProvider config={config.theme}>
          <NavigationProvider>
            <Stack.Navigator initialRouteName="home">
              <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                  title: "Home",
                }}
              />
              <Stack.Screen
                name="simple-component"
                component={SimpleComponent}
                options={{
                  title: "Simple component",
                }}
              />
              <Stack.Screen
                name="updating-inline-style"
                component={UpdateInlineStyles}
                options={{
                  title: "Updating inline style",
                }}
              />
              <Stack.Screen
                name="updating-variant"
                component={ChangeVariants}
                options={{
                  title: "Updating variant",
                }}
              />
              <Stack.Screen
                name="complex-styling"
                component={ComplexStyling}
                options={{
                  title: "Complex styling",
                }}
              />
              <Stack.Screen
                name="layout-screen"
                component={LayoutScreen}
                options={{
                  title: "Layout screen",
                }}
              />
            </Stack.Navigator>
          </NavigationProvider>
        </StyledProvider>
      </TamaguiProvider>
    </NativeBaseProvider>
  );
}
