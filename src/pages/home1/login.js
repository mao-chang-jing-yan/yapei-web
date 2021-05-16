import "./login.css"
import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import RegistrationForm from "./rej";
import {actionCreators} from "./user/store";

class Login extends Component{


    render() {
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
            this.props.login(values)
        };

        if(this.props.myInfo.isLogin) {
            // window.location.href="/"
            this.props.history.length = []
            this.props.history.push('/')
        }

        return (
            <Fragment>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        {/*<Input*/}
                        {/*    prefix={<LockOutlined className="site-form-item-icon" />}*/}
                        {/*    type="password"*/}
                        {/*    placeholder="Password"*/}
                        {/*/>*/}
                        <Input.Password
                            type="password"
                            placeholder="Password"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>

                {/*<RegistrationForm/>*/}
            </Fragment>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        myInfo: state.getIn(["user", "myInfo"]).toJS(),
    }
}
const mapDispatchToProp = (dispatch)=>{
    return{
        login(params){
            dispatch(actionCreators.login(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Login);








