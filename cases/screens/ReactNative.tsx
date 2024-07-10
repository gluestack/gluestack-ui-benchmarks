import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { data } from "../../data";

export const Provider = (props: any) => props.children;

export const ListItem = (item: any) => {
  const { name, thumbnail, label1, label2, label3 } = item.item.values;

  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "#fca5a5",
          borderRadius: 8,
          margin: 4,
        }}
      >
        <View
          style={{
            height: 88,
            flexDirection: "row",
            backgroundColor: "#fca5a5",
            borderRadius: 8,
            padding: 12,
            borderColor: "#991b1b",
            borderWidth: 1,
          }}
        >
          <View
            style={{
              height: 64,
              width: 64,
              marginRight: 12,
            }}
          >
            <View
              style={{
                position: "absolute",
                height: 64,
                width: 64,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
              }}
            ></View>
            <Image
              style={{
                height: 64,
                width: 64,
                borderRadius: 2,
              }}
              source={{
                uri: thumbnail,
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <Text
              numberOfLines={2}
              style={{
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 16,
                color: "white",
              }}
            >
              {name}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Label key="label1" text={label1} />
              <Label key="label2" text={label2} />
              <Label key="label3" text={label3} />
            </View>
          </View>
          <View
            style={{
              marginLeft: 16,
              marginRight: 8,
              justifyContent: "center",
            }}
          ></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function Label({ text }: { text: string }) {
  return (
    <View
      style={{
        height: 24,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: "#fca5a5",
        marginRight: 8,
        borderRadius: 4,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          marginRight: 4,
        }}
      ></View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "700",
          lineHeight: 14,
          color: "white",
        }}
      >
        {text}
      </Text>
    </View>
  );
}

export const ReactNative = () => {
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
