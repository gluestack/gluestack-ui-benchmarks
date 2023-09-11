import styled from "styled-components/native";
import { COUNT } from "../../utils";

const StyledComponents = ({ toggleVariant }: { toggleVariant: boolean }) => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, i) => (
        <Box key={i} $variant={toggleVariant ? "outlined" : "solid"} />
      ))}
    </>
  );
};

export default StyledComponents;

const BoxVariants = {
  variants: {
    solid: {
      background: "red",
      padding: "8px",
    },
    outlined: {
      "border-width": "1px",
      "border-color": "red",
      background: "transparent",
    },
  },
};

const Box = styled.View<{
  $background?: string;
  $padding?: number;
  $variant?: string;
}>((props) => ({
  background: props.$background || "yellow",
  padding: props.$padding || "8px",
  margin: "4px",
  ...(props.$variant === "solid" ? BoxVariants.variants["solid"] : {}),
  ...(props.$variant === "outlined" ? BoxVariants.variants["outlined"] : {}),
}));
