import { useFonts } from "expo-font";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Gluestack from "./GluestackV1";
import ReactNative from "./ReactNative";
import NativeBase from "./NativeBase";
import Tamagui from "./Tamagui";
import TimedRender from "../../components/TimedRender";
import StyledComponents from "./styled-components";

function ChangeVariants() {
  const [styleType, setStyleType] = useState(undefined);
  const [toggleVariant, setToggleVariant] = useState(false);

  const onStyleTypePress = (curry: any) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native":
        return <ReactNative toggleVariant={toggleVariant} />;
      case "gluestack-ui v1":
        return <Gluestack toggleVariant={toggleVariant} />;
      case "gluestack-ui v2":
        return <Gluestack toggleVariant={toggleVariant} />;
      case "Tamagui":
        return <Tamagui toggleVariant={toggleVariant} />;
      case "NativeBase":
        return <NativeBase toggleVariant={toggleVariant} />;
      case "Styled Component":
        return <StyledComponents toggleVariant={toggleVariant} />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap a style library to start rendering</Text>
      <Button
        title="React Native (v0.74.3)"
        onPress={onStyleTypePress("React Native")}
      />
      <Button
        title="gluestack-ui v1 (gluestack-style: 1.0.57)"
        onPress={onStyleTypePress("gluestack-ui v1")}
      />
      <Button
        title="gluestack-ui v2 (nativewind v4)"
        onPress={onStyleTypePress("gluestack-ui v2")}
      />
      <Button
        title="tamagui (v1.102.1)"
        onPress={onStyleTypePress("Tamagui")}
      />
      <Button
        title="NativeBase (v3.4.28)"
        onPress={onStyleTypePress("NativeBase")}
      />
      <Button
        title="Styled Component (v6.1.11)"
        onPress={onStyleTypePress("Styled Component")}
      />
      <Button
        title="Change variant"
        onPress={() => setToggleVariant(!toggleVariant)}
        color="red"
      />
      {styleType ? (
        <TimedRender key={styleType + toggleVariant}>
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}

      {renderStyleLibrary()}
    </View>
  );
}

export default ChangeVariants;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 32,
  },
  text: {
    marginVertical: 12,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
