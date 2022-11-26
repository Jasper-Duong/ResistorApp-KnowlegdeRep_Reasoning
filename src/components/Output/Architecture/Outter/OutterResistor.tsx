import { Col, Row } from "antd";
import styled from "styled-components";
import OutterLine from "./OutterLine";
const Styled = styled.div`
  display: flex;
  align-items: center;
  .ant-row {
    align-items: center;
  }
`;
interface Props {
  ele: JSX.Element;
}
export default function OutterResistor(props: Props) {
  const { ele } = props;
  return (
    <Styled>
      <Row>
        <Col span={2}>
          <OutterLine />
        </Col>
        <Col span={20}>{ele}</Col>
        <Col span={2}>
          <OutterLine />
        </Col>
      </Row>
    </Styled>
  );
}
