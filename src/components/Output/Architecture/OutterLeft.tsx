import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { OutterStyled } from "../../../styles/Outter";
import OutterLine from "./Outter/OutterLine";
import OutterSquare from "./Outter/OutterSquare";

const Styled = styled(OutterStyled)``;

export default function OutterLeft() {
  return (
    <Styled>
      <Row>
        <Col span={8}>
          <OutterSquare />
        </Col>
        <Col span={16}>
          <OutterLine />
        </Col>
      </Row>
    </Styled>
  );
}
