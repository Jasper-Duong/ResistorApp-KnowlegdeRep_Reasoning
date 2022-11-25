import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { setInputs } from "../../store/actions/input.action";

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
    // console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      architecture: "[R1+R2]*R3",
      values: "R1=5;R2=3;R3=4",
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
        rules={[{ required: true }]}
      >
        <Input placeholder="[R1+R2]*R3"/>
      </Form.Item>
      <Form.Item name="values" label="Values" rules={[{ required: true }]}>
        <Input placeholder="R1=5;R2=3;R3=4"/>
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
