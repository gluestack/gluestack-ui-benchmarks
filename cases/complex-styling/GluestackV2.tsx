import React from "react";
import { Platform, Pressable } from "react-native";
import { COUNT } from "../../utils";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { VariantProps } from "@gluestack-ui/nativewind-utils";
import { cssInterop } from "nativewind";
import { withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";
import { withStyleContextAndStates } from "@gluestack-ui/nativewind-utils/withStyleContextAndStates";

const button = tva({
  base: "bg-yellow-500 p-2 m-1 hover:bg-yellow-600 active:bg-yellow-700 focus:bg-yellow-800",
  variants: {
    variant: {
      solid:
        "bg-red-500 p-2 hover:bg-red-600 active:bg-red-700 focus:bg-red-800",
      outlined:
        "border border-red-500 bg-transparent hover:bg-red-600 active:bg-red-700 focus:bg-red-800",
    },
  },
});

type IButtonProps = React.ComponentProps<typeof Pressable> &
  VariantProps<typeof button>;

const SCOPE = "BUTTON";

const Root =
  Platform.OS === "web"
    ? withStyleContext(Pressable, SCOPE)
    : withStyleContextAndStates(Pressable, SCOPE);

const Button = React.forwardRef(
  ({ className, variant, ...props }: IButtonProps, ref?: any) => {
    return (
      <Root
        ref={ref}
        {...props}
        className={button({ class: className, variant })}
      />
    );
  }
);

cssInterop(Button, { className: "style" });

const GluestackV2 = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, k) => (
        <Button
          key={k}
          variant="solid"
          className="hover:bg-violet-600 active:bg-violet-700 focus:bg-violet-800"
        />
      ))}
    </>
  );
};

export default GluestackV2;
