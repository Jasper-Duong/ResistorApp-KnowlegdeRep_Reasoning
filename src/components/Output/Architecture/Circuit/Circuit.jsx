import { useSelector } from "react-redux";
import styled from "styled-components";
// import { RootState } from "../../../../store/reducers/inputReducer";
import { MainWrapper } from "../../../../styles/MainWrapper";
import OutterResistor from "../Outter/OutterResistor";
import HLink from "./Link/HLink";
import VLink from "./Link/VLink";
import Resistor from "./Resistor";
const math = require("mathjs");

const Styled = styled(MainWrapper)``;

export default function Circuit() {
  const { inputs } = useSelector((state) => state.inputReducer);
  // console.log(inputs);
  const node = math.parse(inputs.architecture);
  const nodeJSON = JSON.parse(JSON.stringify(node, null, 2));
  const lnrTraverse = (treeJSON) => {
    const currNode = { ...treeJSON };
    for (let i in treeJSON) {
      if (i === "mathjs") {
        switch (currNode.mathjs) {
          case "OperatorNode":
            console.log(currNode.op);
            if (currNode.op === "+") {
              // console.log("HLink");
              return (
                <HLink
                  left={lnrTraverse(currNode.args[0])}
                  right={lnrTraverse(currNode.args[1])}
                />
              );
            } else {
              // console.log("VLink");
              return (
                <VLink
                  left={lnrTraverse(currNode.args[0])}
                  right={lnrTraverse(currNode.args[1])}
                />
              );
            }
          case "ParenthesisNode":
            // console.log("(");
            return lnrTraverse(currNode.content);
            // console.log(")");
            // break;
          case "SymbolNode":
            const name = currNode.name;
            const ele = <Resistor name={name} />;
            console.log(name);
            return <OutterResistor ele={ele} />;
          default:
            break;
        }
      }
    }
  };
  return (
    <Styled>
      {lnrTraverse(nodeJSON)}
      {/* <HLink left={<Resistor name={"R1"} />} right={<Resistor name={"R2"} />} /> */}
    </Styled>
  );
}
