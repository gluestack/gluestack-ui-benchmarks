import React from "react";
import { View } from "react-native";
import { COUNT } from "../../utils";

import { tva } from "@gluestack-ui/nativewind-utils/tva";
import type { VariantProps } from "@gluestack-ui/nativewind-utils";

export const boxStyle = tva({
  base: "bg-yellow-500 p-2 m-1",
  variants: {
    variant: {
      outlined: "border border-red-500 bg-transparent",
      solid: "bg-red-500 p-2",
    },
  },
});

type IBoxProps = React.ComponentProps<typeof View> &
  VariantProps<typeof boxStyle>;

const Box = React.forwardRef(
  ({ className, variant, ...props }: IBoxProps, ref?: any) => {
    return (
      <View
        ref={ref}
        {...props}
        className={boxStyle({ class: className, variant })}
      />
    );
  }
);

const Gluestack = ({ toggleVariant }: { toggleVariant?: boolean }) => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Box key={k} variant={toggleVariant ? "outlined" : "solid"} />
      ))}
    </>
  );
};

export default Gluestack;
