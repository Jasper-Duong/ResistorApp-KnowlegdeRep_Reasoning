// import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import styled from "styled-components";
// import { RootState } from "../../store/reducers/inputReducer";
import { MainWrapper } from "../../styles/MainWrapper";
import Architecture from "./Architecture/Architecture";
import Result from "./Result";

const Styled = styled(MainWrapper)`
.ant-row {
  width: 100%
}`;

export default function Output() {
  return (
    <Styled>
      <Row>
        <Col span={24}>
          Circuit:
          <Architecture />
        </Col>
        <Col span={24}>
          <Result />
        </Col>
      </Row>
    </Styled>
  );
}
