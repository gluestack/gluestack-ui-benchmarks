import styled from "styled-components/native";
import { COUNT } from "../../utils";

const StyledComponents = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, i) => (
        <Button key={i} $variant="solid" />
      ))}
    </>
  );
};

export default StyledComponents;

const ButtonVariants = {
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

const Button = styled.Pressable<{
  $background?: string;
  $padding?: number;
  $variant?: string;
}>((props) => ({
  background: props.$background || "yellow",
  padding: props.$padding || "8px",
  margin: "4px",
  "&:hover": {
    background: "pink",
  },
  "&:active": {
    background: "red",
  },
  ...(props.$variant === "solid" ? ButtonVariants.variants["solid"] : {}),
  ...(props.$variant === "outlined" ? ButtonVariants.variants["outlined"] : {}),
}));
