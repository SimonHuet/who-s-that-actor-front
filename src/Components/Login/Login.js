import './Login.css'
import { Form, Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import * as AuthState from '../../State/Auth'
import { Redirect } from 'react-router-dom'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export const Login = () => {
  const dispatch = useDispatch()
  const error = useSelector(AuthState.select.error)
  const user = useSelector(AuthState.select.user)

  const handleSubmit = ({ email, password }) => {
    dispatch(AuthState.login({ email, password }))
  }

  if (!error && user) return <Redirect to={{ pathname: '/' }} />

  return (
    <div className="wrapper-login">
      <div className="Login" style={{ width: 400, margin: '100px auto' }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              onChange={e =>
                dispatch(AuthState.changeFormData('email', e.target))
              }
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              onChange={e =>
                dispatch(AuthState.changeFormData('password', e.target))
              }
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          {error && <div className="error">{error.message}</div>}
        </Form>
      </div>
    </div>
  )
}
