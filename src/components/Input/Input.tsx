import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/reducers/inputReducer";
import { MainWrapper } from "../../styles/MainWrapper";
import AntdForm from "./AntdForm";
import ValuesForm from "./ValuesForm";
const Styled = styled(MainWrapper)`
flex-wrap: wrap;
  form {
    width: 100%;
    .ant-form-item-control-input-content {
      display: flex;
      button:first-of-type {
        margin-right: 1rem;
      }
    }
    .ant-form-item-explain-error {
      text-align: left;
    }
  }
`;


export default function Input() {
  const {resistors} = useSelector((state:RootState) => state.resistorsReducer);
  return (
    <Styled>
      <AntdForm />
      {resistors.length > 0 && <ValuesForm resistors={resistors}/>}
    </Styled>
  );
}
