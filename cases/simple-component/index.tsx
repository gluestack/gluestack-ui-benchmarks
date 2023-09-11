import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Gluestack from "./Gluestack";
import ReactNative from "./ReactNative";
import NativeBase from "./NativeBase";
import Tamagui from "./Tamagui";
import TimedRender from "../../components/TimedRender";
import StyledComponents from "./styled-components";

function Example() {
  const [styleType, setStyleType] = useState(undefined);

  const onStyleTypePress = (curry: any) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native":
        return <ReactNative />;
      case "gluestack":
        return <Gluestack />;
      case "Tamagui":
        return <Tamagui />;
      case "NativeBase":
        return <NativeBase />;
      case "Styled Components":
        return <StyledComponents />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap a style library to start rendering</Text>
      <Button title="React Native" onPress={onStyleTypePress("React Native")} />
      <Button title="gluestack" onPress={onStyleTypePress("gluestack")} />
      <Button title="Tamagui" onPress={onStyleTypePress("Tamagui")} />
      <Button title="NativeBase" onPress={onStyleTypePress("NativeBase")} />
      <Button
        title="Styled Components"
        onPress={onStyleTypePress("Styled Components")}
      />
      {styleType ? (
        <TimedRender key={styleType}>
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}

      {renderStyleLibrary()}
    </View>
  );
}

export default function SimpleComponent() {
  return <Example />;
}

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
