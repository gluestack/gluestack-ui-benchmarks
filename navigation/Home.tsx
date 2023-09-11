import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SimpleComponent from "../simple-component";
import LayoutScreen from "../screens";
import ButtonWithDefaultTheme from "../button-with-default-theme";
import UpdateInlineProp from "../update-inline-props";
import UpdateVariant from "../update-variant";

const Stack = createNativeStackNavigator<{
  home: undefined;
  "simple-component": undefined;
  "button-with-default-theme": undefined;
  "updating-inline-style": undefined;
  "updating-variant": undefined;
  "layout-screen": undefined;
}>();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
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
        name="button-with-default-theme"
        component={ButtonWithDefaultTheme}
        options={{
          title: "Buton with default theme",
        }}
      />
      <Stack.Screen
        name="updating-inline-style"
        component={UpdateInlineProp}
        options={{
          title: "Updating inline style",
        }}
      />
      <Stack.Screen
        name="updating-variant"
        component={UpdateVariant}
        options={{
          title: "Updating variant",
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
  );
};

export default Home;
