// import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import { Root } from "react-dom/client";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/reducers/resistorsReducer";
// import { RootState } from "../../store/reducers/inputReducer";
import { MainWrapper } from "../../styles/MainWrapper";
import Architecture from "./Architecture/Architecture";
import Result from "./Result";

const Styled = styled(MainWrapper)`
  .ant-row {
    width: 100%;
  }
`;

export default function Output() {
  const { resistors } = useSelector(
    (state: RootState) => state.resistorsReducer
  );
  const { inputs } = useSelector((state: RootState) => state.inputReducer);
  return (
    <Styled>
      <Row>
        <Col span={24}>
          
          {inputs.architecture && <Architecture />}
        </Col>
        <Col span={24}>{resistors.length > 0 && <Result />}</Col>
      </Row>
    </Styled>
  );
}
