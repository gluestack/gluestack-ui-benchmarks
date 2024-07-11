import { HStack, VStack, Text, Image } from "@gluestack-ui/themed";
import React from "react";
import { ScrollView } from "react-native";
import { data } from "../../data";

export function Provider({ children }) {
  return <>{children}</>;
}

export const ListItem = (item) => {
  const { name, thumbnail, label1, label2, label3 } = item.item.values;

  return (
    <HStack
      borderWidth={1}
      bg="$red300"
      p="$3"
      h={88}
      borderColor="$red800"
      rounded="$sm"
      m="$1"
    >
      <VStack h={"$16"} w={"$16"} mr={3}>
        <VStack
          position="absolute"
          h={"$16"}
          w={"$16"}
          justifyContent="center"
          alignItems="center"
          zIndex={1}
        >
          {/* <Icon /> */}
        </VStack>
        <Image
          h={"$16"}
          w={"$16"}
          source={{ uri: thumbnail }}
          alt={name}
          resizeMode="cover"
          borderRadius={2}
        />
      </VStack>
      <VStack flex={1} justifyContent="space-between" overflow="hidden">
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          lineHeight={"$md"}
          numberOfLines={2}
        >
          {name}
        </Text>
        <HStack flexDirection="row" flex={1} alignItems="flex-end">
          <Label key="label1" text={label1} />
          <Label key="label2" text={label2} />
          <Label key="label3" text={label3} />
        </HStack>
      </VStack>
      <VStack alignItems="center" justifyContent="center"></VStack>
    </HStack>
  );
};

function Label({ text }) {
  return (
    <HStack
      px={2}
      py={1}
      bg="$red800"
      mr={2}
      borderRadius={4}
      alignItems="center"
    >
      <VStack mr={1}></VStack>
      <Text fontSize="$xs" fontWeight="$bold" lineHeight={14}>
        {text}
      </Text>
    </HStack>
  );
}

export const GlueStack = () => {
  return (
    <ScrollView>
      <Provider>
        {[...data, ...data].map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Provider>
    </ScrollView>
  );
};
