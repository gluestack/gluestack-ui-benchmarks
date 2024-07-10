import React from "react";
import { COUNT } from "../../utils";

import { tva } from "@gluestack-ui/nativewind-utils/tva";
import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import { View } from "react-native";

export const boxStyle = tva({
  base: "",
});

type IBoxProps = React.ComponentProps<typeof View> &
  VariantProps<typeof boxStyle>;

const Box = React.forwardRef(
  ({ className, ...props }: IBoxProps, ref?: any) => {
    return (
      <View ref={ref} {...props} className={boxStyle({ class: className })} />
    );
  }
);

const GluestackV2 = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box className="bg-yellow-500 p-2 m-2" key={k} />
      ))}
    </>
  );
};

export default GluestackV2;
