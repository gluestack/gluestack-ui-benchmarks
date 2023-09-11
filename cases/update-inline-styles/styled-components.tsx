import styled from "styled-components/native";
import { COUNT } from "../../utils";

const StyledComponents = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, i) => (
        <Box key={i} $background="red" $padding={8} />
      ))}
    </>
  );
};

export default StyledComponents;

const Box = styled.View<{
  $background?: string;
  $padding?: number;
}>((props) => ({
  background: props.$background,
  padding: props.$padding,
  margin: "4px",
}));
