import { Col, Row } from "antd";
import styled from "styled-components";
import { LinkProps } from "../../../../../styles/LinkProps";
import OutterLine from "../../Outter/OutterLine";

const Styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .mid {
    display: flex;
    align-items: center;
  }
`;

export default function HLink(props: LinkProps) {
  const { left, right } = props;
  return (
    <Styled>
      <Row>
        <Col span={11} className="col left">
          {left}
        </Col>
        <Col span={2} className="col mid">
          <OutterLine />
        </Col>
        <Col span={11} className="col right">
          {right}
        </Col>
      </Row>
    </Styled>
  );
}
