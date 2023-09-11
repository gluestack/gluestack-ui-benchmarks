import { TamaguiProvider, XStack, YStack, Image, Text } from "tamagui";
import { ScrollView } from "react-native";
import { data } from "../../data";
import config from "../../tamagui.config";

export function Provider({ children, ...props }) {
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme="light"
      {...props}
    >
      {children}
    </TamaguiProvider>
  );
}

export const ListItem = (item) => {
  const { name, thumbnail, label1, label2, label3 } = item.item.values;

  return (
    <XStack
      bw={1}
      bc="$yellow5Light"
      p="$3"
      h={88}
      boc="$borderColor"
      borderRadius="$4"
      my="$1"
    >
      <YStack h={64} w={64} mr={3}>
        <YStack
          position="absolute"
          h={64}
          w={64}
          justifyContent="center"
          alignItems="center"
          zIndex={1}
        ></YStack>
        <Image
          h={64}
          w={64}
          source={thumbnail}
          alt={name}
          resizeMode="cover"
          borderRadius={2}
        />
      </YStack>
      <YStack flex={1} justifyContent="space-between" overflow="hidden">
        <Text
          fontSize={14}
          fontWeight="medium"
          lineHeight={16}
          ellipse
          numberOfLines={2}
        >
          {name}
        </Text>
        <XStack flexDirection="row" flex={1} alignItems="flex-end">
          <Label key="label1" text={label1} />
          <Label key="label2" text={label2} />
          <Label key="label3" text={label3} />
        </XStack>
      </YStack>
      <YStack ai="center" jc="center">
        {/* <Icon /> */}
      </YStack>
    </XStack>
  );
};

function Label({ text }) {
  return (
    <XStack
      h={6}
      px={2}
      py={1}
      bc="$background"
      mr={2}
      borderRadius={4}
      alignItems="center"
    >
      <YStack mr={1}></YStack>
      <Text fontSize={10} fontWeight="bold" lineHeight={14} ellipse>
        {text}
      </Text>
    </XStack>
  );
}

export const Tamagui = () => {
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
