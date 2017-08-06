import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import './Login.less';

const FormItem = Form.Item;

class Login extends Component {
  render() {
    return (
      <Form className="login-form" layout="horizontal" horizontal="true" >
        <FormItem label="用户名">
          <Input
            placeholder="字母、数字，不少于5位"
          />
        </FormItem>
        <FormItem label="密码">
          <Input
            type="password"
            placeholder="不少于6位"
          />
        </FormItem>
        <FormItem label="确认密码">
          <Input
            type="password"
            placeholder=""
          />
        </FormItem>
        <FormItem label="email">
          <Input />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            注册
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Login;
