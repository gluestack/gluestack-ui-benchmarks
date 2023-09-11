import { StyleSheet, View } from "react-native";
import { COUNT, WITH_INLINE_PROPS } from "../../utils";

const Native = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View key={i} style={WITH_INLINE_PROPS ? styles.styledView : {}} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  styledView: {
    backgroundColor: "yellow",
    padding: 8,
    margin: 4,
  },
});

export default Native;
