import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/reducers/outputReducer";
import { MainWrapper } from "../../styles/MainWrapper";
const Styled = styled(MainWrapper)`
  display: block;
`;

export default function Result() {
  const { output } = useSelector((state: RootState) => state.outputReducer);
  return (
    <Styled>
      <span>
        Điện trở tương đương: <b>{output.toFixed(5)}</b>
      </span>
    </Styled>
  );
}
