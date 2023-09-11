import { Button, NativeBaseProvider, View } from "native-base";

const NativeBase = () => {
  return (
    <NativeBaseProvider>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Button
            key={i}
            p="2"
            borderWidth="2"
            borderColor="red.600"
            _hover={{
              p: "2",
              borderWidth: "2",
              borderColor: "red.600",
            }}
          />
        ))}
      </View>
    </NativeBaseProvider>
  );
};

export default NativeBase;
