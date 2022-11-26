// import { Col, Row } from "antd";
import styled from "styled-components";
import { LinkProps } from "../../../../../styles/LinkProps";
import OutterResistor from "../../Outter/OutterResistor";

const Styled = styled.div`
  width: 100%;
  position: relative;
  .box {
    position: absolute;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    width: 100%;
    height: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`;

export default function VLink(props: LinkProps) {
  const { left, right } = props;
  return (
    <Styled>
      <div className="box"></div>
      <OutterResistor ele={left} />
      <OutterResistor ele={right} />
    </Styled>
  );
}
