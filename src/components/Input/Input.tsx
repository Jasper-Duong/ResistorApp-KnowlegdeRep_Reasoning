import styled from "styled-components";
import { MainWrapper } from "../../styles/MainWrapper";
import AntdForm from "./AntdForm";
const Styled = styled(MainWrapper)`
  form {
    width: 100%;
    .ant-form-item-control-input-content {
      display: flex;
      button {
        margin-right: 1rem;
      }
    }
    .ant-form-item-explain-error {
      text-align: left;
    }
  }
`;


export default function Input() {
  return (
    <Styled>
      <AntdForm />
    </Styled>
  );
}
