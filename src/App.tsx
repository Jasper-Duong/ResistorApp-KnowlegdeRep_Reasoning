import styled from "styled-components";
import "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import { MainWrapper } from "./styles/MainWrapper";
// import 'antd/dist/reset.css';

const Styled = styled(MainWrapper)`
  justify-content: center;
`;

function App() {
  return (
    <Styled className="App">
      <AppWrapper />
    </Styled>
  );
}

export default App;
