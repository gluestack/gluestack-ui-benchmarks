import {
  Box,
  Center,
  extendTheme,
  HStack,
  Image,
  NativeBaseProvider,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import { data } from "../../data";

export function Provider({ children }) {
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
}

export const ListItem = (item) => {
  const { name, thumbnail, label1, label2, label3 } = item.item.values;

  return (
    <Pressable bg="red.300" borderRadius="8" m="1">
      <Box
        height="88"
        bg="red.300"
        borderRadius="8"
        p="3"
        borderColor="red.800"
        borderWidth="1"
        flexDirection="row"
      >
        <Box h="16" w="16" mr="3">
          <Box
            position="absolute"
            h="16"
            w="16"
            justifyContent="center"
            alignItems="center"
            zIndex={1}
          ></Box>
          <Image
            h="16"
            w="16"
            source={{
              uri: thumbnail,
            }}
            alt={name}
            resizeMode="cover"
            borderRadius="2"
          />
        </Box>
        <VStack flex="1" justifyContent="space-between" overflow="hidden">
          <Text
            fontSize="sm"
            fontWeight="medium"
            lineHeight="16px"
            numberOfLines={2}
            isTruncated
          >
            {name}
          </Text>
          <HStack flexDirection="row" flex="1" alignItems="flex-end">
            <Label key="label1" text={label1} />
            <Label key="label2" text={label2} />
            <Label key="label3" text={label3} />
          </HStack>
        </VStack>
        <Center></Center>
      </Box>
    </Pressable>
  );
};

function Label({ text }) {
  return (
    <HStack
      h={6}
      px={2}
      py={1}
      bg="red.300"
      mr={2}
      borderRadius="4"
      alignItems="center"
    >
      <Box mr="1"></Box>
      <Text fontSize="xs" fontWeight="bold" lineHeight="14px" isTruncated>
        {text}
      </Text>
    </HStack>
  );
}

export const NativeBase = () => {
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
