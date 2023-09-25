import styled from "styled-components/native";
import { COUNT } from "../../utils";

const StyledComponents = () => {
  return (
    <>
      {new Array(COUNT).fill(0).map((_, i) => (
        <Box key={i} />
      ))}
    </>
  );
};

export default StyledComponents;

const Box = styled.View`
  background-color: yellow;
  padding: 8px;
  margin: 4px;
`;
