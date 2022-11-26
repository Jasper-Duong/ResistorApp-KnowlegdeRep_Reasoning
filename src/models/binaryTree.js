const math = require("mathjs");

const s = "((R1+R2+R3)*R4)+(R5*R6)";
const node = math.parse(s);
const nodeJSONString = JSON.stringify(node, null, 2);
const nodeJSON = JSON.parse(nodeJSONString);
// console.log(nodeJSONString);

node.traverse(function (node, path, parent) {
  switch (node.type) {
    case "OperatorNode":
      // console.log(node.type, node.op)
      break;
    case "ConstantNode":
      // console.log(node.type, node.value)
      break;
    case "SymbolNode":
      // console.log(node.type, node.name)
      break;
    default:
    // console.log(node.type)
  }
});

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// const tree = new Node(null);
let tree = new Node(null);

const lnrTraverse = (treeJSON) => {
  const currNode = { ...treeJSON };
  for (let i in treeJSON) {
    if (i === "mathjs") {
      switch (currNode.mathjs) {
        case "OperatorNode":
          lnrTraverse(currNode.args[0]);
          console.log(currNode.op);
          lnrTraverse(currNode.args[1]);
          break;
        case "ParenthesisNode":
          lnrTraverse(currNode.content);
          break;
        case "SymbolNode":
          console.log(currNode.name);
          // return currNode.name;
          break;
        default:
          break;
      }
    }
  }
};
lnrTraverse(nodeJSON);
// console.log(tree);
