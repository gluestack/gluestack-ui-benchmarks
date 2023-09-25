import { useFonts } from "expo-font";
import NavigationProvider from "./navigation/NavigationProvider";
import HomeScreen from "./HomeScreen";
import {
  ChangeVariants,
  LayoutScreen,
  SimpleComponent,
  ComplexStyling,
  SimpleComponentVariants,
  SimpleComponentVariantsStates,
  SimpleComponentVariantsStatesInline,
} from "./cases";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TMConfig from "./tamagui.config";
import { TamaguiProvider } from "tamagui";
import { NativeBaseProvider } from "native-base";
import { GluestackUIProvider } from "@gluestack-ui/themed";

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
      <GluestackUIProvider>
        <TamaguiProvider config={TMConfig}>
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
                name="updating-variant"
                component={ChangeVariants}
                options={{
                  title: "Updating variant",
                }}
              />
              <Stack.Screen
                name="theme-inline-styling"
                component={ComplexStyling}
                options={{
                  title: "Theme and inline style",
                }}
              />
              <Stack.Screen
                name="layout-screen"
                component={LayoutScreen}
                options={{
                  title: "Layout screen",
                }}
              />

              <Stack.Screen
                name="simple-component-variants"
                component={SimpleComponentVariants}
                options={{
                  title: "Simple component with variants",
                }}
              />
              <Stack.Screen
                name="simple-component-variants-states"
                component={SimpleComponentVariantsStates}
                options={{
                  title: "Simple component with variants and states",
                }}
              />
              <Stack.Screen
                name="simple-component-variants-states-inline"
                component={SimpleComponentVariantsStatesInline}
                options={{
                  title: "Simple component with variants and states and inline",
                }}
              />
            </Stack.Navigator>
          </NavigationProvider>
        </TamaguiProvider>
      </GluestackUIProvider>
    </NativeBaseProvider>
  );
}
