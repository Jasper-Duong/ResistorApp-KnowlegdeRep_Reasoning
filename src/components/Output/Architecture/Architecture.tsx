import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import Circuit from "./Circuit/Circuit";
import OutterLeft from "./OutterLeft";
import OutterRight from "./OutterRight";

const Styled = styled.div`
  margin: 1rem 0;
  .architecture-row{
    align-items: center;
  }
`;

export default function Architecture() {
  return (
    <Styled>
      <Row className="architecture-row">
        <Col span={2}>
          <OutterLeft />
        </Col>
        <Col span={20}>
          <Circuit />
        </Col>
        <Col span={2}>
          <OutterRight />
        </Col>
      </Row>
    </Styled>
  );
}
