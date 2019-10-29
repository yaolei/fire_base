// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Form from 'antd/lib/form'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import Checkbox from 'antd/lib/checkbox'
import PromptBox from '../../components/PromptBox'
import {randomNum, calculateWidth} from '../../untils/utils'
import 'antd/dist/antd.css'
class LoginFormBase extends React.Component {
    state = {
        focusItem: -1,   //保存当前聚焦的input
        code: ''         //验证码
      }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;
    const {focusItem, code} = this.state
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item help={getFieldError('username') &&
          <PromptBox info={getFieldError('username')} width={calculateWidth(getFieldError('username'))}/>}>
            {getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名'}]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem: -1})}
                maxLength={16}
                placeholder='用户名'
                />
            )}
          </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const LoginForm = Form.create({})(LoginFormBase);
export default LoginForm;