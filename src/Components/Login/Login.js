import './Login.css'
import { Form, Input, Button, Checkbox } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const submit = ({ email, password, remember }) => {
  console.log(email)
  console.log(password)
  console.log(remember)
}

export const Login = () => (
  <div className="wrapper">
    <div className="Login" style={{ width: 400, margin: '100px auto' }}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={submit}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
)
