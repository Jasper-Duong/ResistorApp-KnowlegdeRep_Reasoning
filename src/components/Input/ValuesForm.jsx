import { Button, Col, Form, Input, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { setResistors, setResult } from "../../store/actions/input.action";
import { horizontal, vertical } from "../../utils/calculate";
const math = require("mathjs");

const layout = {
  labelCol: { offset: 1, span: 5 },
  wrapperCol: { offset: 3, span: 15 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 19 },
};
const ValuesForm = (props) => {
  const { resistors } = props;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { inputs } = useSelector((state) => state.inputReducer);
  const node = math.parse(inputs.architecture);
  const nodeJSON = JSON.parse(JSON.stringify(node, null, 2));
  const onFinish = (values) => {
    const newRes = resistors.map((ele) => {
      return { ...ele, value: values[ele.name] * 1 };
    });
    dispatch(setResistors(newRes));
    const traverse = (treeJSON) => {
      const currNode = { ...treeJSON };
      for (let i in treeJSON) {
        if (i === "mathjs") {
          switch (currNode.mathjs) {
            case "OperatorNode":
              console.log(currNode.op);
              if (currNode.op === "+") {
                return horizontal([
                  traverse(currNode.args[0]),
                  traverse(currNode.args[1]),
                ]);
              } else {
                return vertical([
                  traverse(currNode.args[0]),
                  traverse(currNode.args[1]),
                ]);
              }
            case "ParenthesisNode":
              // console.log("(");
              return traverse(currNode.content);
            // console.log(")");
            case "SymbolNode":
              const name = currNode.name;
              console.log(values[name]);
              return values[name] * 1;
            default:
              break;
          }
        }
      }
    };
    const res = traverse(nodeJSON);
    // console.log({ res });
    dispatch(setResult(res));
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      R1: "5",
      R2: "8",
      R3: "9",
      R4: "10",
      R5: "7.5",
      R6: "9",
    });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      labelAlign="left"
    >
      <Row>
        {resistors.map((ele) => {
          return (
            <Col span={8} key={ele.name}>
              <Form.Item
                name={ele.name}
                label={ele.name}
                rules={[
                  { required: true },
                  {
                    pattern: /^[0-9\.]*$/,
                    message: "Not a Number",
                  },
                ]}
              >
                <Input placeholder="5" />
              </Form.Item>
            </Col>
          );
        })}
      </Row>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ValuesForm;
