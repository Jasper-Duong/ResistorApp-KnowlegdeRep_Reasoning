import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/reducers/inputReducer";
import { MainWrapper } from "../../styles/MainWrapper";

const Styled = styled(MainWrapper)`
  flex-basis: 100%;
`;

export default function Output() {
  const inputs = useSelector((state:RootState) => state.inputReducer);
  console.log({ inputs });

  return <Styled>Output</Styled>;
}
