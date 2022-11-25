import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/reducers/inputReducer";
import { MainWrapper } from "../../styles/MainWrapper";

const Styled = styled(MainWrapper)`
  justify-content: flex-start;
  text-align: left;
`;

export default function Circuit() {
  const {inputs} = useSelector((state: RootState) => state.inputReducer);
  console.log(inputs);
  return (
    <Styled>
      Architecture: {inputs.architecture}
      <br/>
      Values: {inputs.values}
    </Styled>
  );
}
