import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { setInputs, setResistors } from "../../store/actions/input.action";
import { R } from "../../interfaces/resistor";
const math = require("mathjs");

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 19 },
};

const AntdForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(setInputs(values));
    const node = math.parse(values.architecture);
    const resistors: R[] = [];
    node.traverse(function (node: any) {
      switch (node.type) {
        case "OperatorNode":
          // console.log(node.type, node.op)
          break;
        case "ParenthesisNode":
          // console.log(node.type, node.value)
          break;
        case "SymbolNode":
          // console.log(node.type, node.name)

          resistors.push({ name: node.name });
          break;
        default:
        // console.log(node.type)
      }
    });
    dispatch(setResistors(resistors));
    // console.log(values);
  };

  const onReset = () => {
    form.resetFields();
    dispatch(setInputs({ architecture: "", values: "" }));
    dispatch(setResistors([]));
  };

  const onFill = () => {
    form.setFieldsValue({
      architecture: "((R1+R2+R3)*R4)+(R5*R6)",
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
      <Form.Item
        name="architecture"
        label="Architecture"
        rules={[
          { required: true },
          {
            pattern: /^[a-zA-Z 0-9\)\(\+\*]*$/,
            message: "Only contain numbers, characters, (, ) , + and * ",
          },
        ]}
      >
        <Input placeholder="(R1+R2)*R3" />
      </Form.Item>
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

export default AntdForm;
