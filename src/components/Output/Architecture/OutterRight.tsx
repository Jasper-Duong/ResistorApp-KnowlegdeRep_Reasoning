import { Col, Row } from "antd";
import styled from "styled-components";
import { OutterStyled } from "../../../styles/Outter";
import OutterLine from "./Outter/OutterLine";
import OutterSquare from "./Outter/OutterSquare";

const Styled = styled(OutterStyled)``;

export default function OutterRight() {
  return (
    <Styled>
      <Row>
        <Col span={16}>
          <OutterLine />
        </Col>
        <Col span={8}>
          <OutterSquare />
        </Col>
      </Row>
    </Styled>
  );
}
