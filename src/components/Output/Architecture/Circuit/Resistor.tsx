import styled from "styled-components";
import { R } from "../../../../interfaces/resistor";
import OutterLine from "../Outter/OutterLine";
const Styled = styled.div`
  display: flex;
  align-items: center;
`;
export default function Resistor(r: R) {
  const { name } = r;
  return (
    <Styled>
      <OutterLine />
      {name}
      <OutterLine />
    </Styled>
  );
}
