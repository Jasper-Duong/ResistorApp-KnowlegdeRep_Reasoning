import React from "react";
import styled from "styled-components";
import { MainWrapper } from "../../styles/MainWrapper";
import Input from "../Input/Input";
import Output from "../Output/Output";

const Styled = styled(MainWrapper)`
  margin: 3rem auto;
  max-width: 600px;
  background-color: #fff;
  padding: 2rem;
  flex-wrap: wrap;
`;

export default function AppWrapper() {
  return (
    <Styled>
      <Input />
      <Output />
    </Styled>
  );
}
