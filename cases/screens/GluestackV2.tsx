import React from "react";
import { ScrollView } from "react-native";
import { data } from "../../data";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";

export function Provider({ children }) {
  return <>{children}</>;
}

export const ListItem = (item) => {
  const { name, thumbnail, label1, label2, label3 } = item.item.values;

  return (
    <HStack className="border border-red-800 bg-red-300 p-3 h-88 rounded-md m-1">
      <VStack className="h-16 w-16 mr-3">
        <VStack className="absolute h-16 w-16 justify-center items-center z-1"></VStack>
        <Image
          className="h-16 w-16 border-2"
          source={{ uri: thumbnail }}
          alt={name}
        />
      </VStack>
      <VStack className="flex-1 justify-between overflow-hidden">
        <Text className="text-sm font-medium leading-3" numberOfLines={2}>
          {name}
        </Text>
        <HStack className="flex-row flex-1 items-end">
          <Label key="label1" text={label1} />
          <Label key="label2" text={label2} />
          <Label key="label3" text={label3} />
        </HStack>
      </VStack>
      <VStack className="items-center justify-center"></VStack>
    </HStack>
  );
};

function Label({ text }) {
  return (
    <HStack className="h-6 px-2 py-1 bg-red-300 mr-2 rounded-4 items-center">
      <VStack className="mr-1"></VStack>
      <Text className="text-xs font-bold leading-[14px]">{text}</Text>
    </HStack>
  );
}

export const GlueStackV2 = () => {
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
