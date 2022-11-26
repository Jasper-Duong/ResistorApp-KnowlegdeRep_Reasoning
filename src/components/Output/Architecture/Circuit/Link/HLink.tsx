import { Col, Row } from "antd";
import styled from "styled-components";
import { LinkProps } from "../../../../../styles/LinkProps";
import OutterLine from "../../Outter/OutterLine";

const Styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .col {
    display: flex;
    align-items: center;
  }
`;

export default function HLink(props: LinkProps) {
  const { left, right } = props;
  return (
    <Styled>
      {left}
      <OutterLine />
      {right}
      <OutterLine />
    </Styled>
  );
}
