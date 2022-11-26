import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  align-items: center;
  height: 1rem;
  width: 1rem;
  position: relative;
  &::before {
    border-top: 1px solid #000;
    content: "";
    position: absolute;
    top: 1px;
    /* left: 0; */
    /* right: -50%; */
    /* transform: rotate(45deg); */
    /* transform-origin: 0 0; */
    right: 0;
    left: -50%;
    transform: rotate(-60deg);
    transform-origin: 80% 0;
  }
  .square {
    height: 1rem;
    width: 1rem;
    background-color: grey;
  }
`;

export default function OutterSquare() {
  return (
    <Styled>
      <div className="square"></div>
    </Styled>
  );
}
