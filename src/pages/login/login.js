import React, { Component } from 'react'; // 引入了React
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import Config from '../../config/index';
import logoImage from '../../image/logo.png'
import { initialState, goLogin } from '../../redux/action/login/loginAction';

import styles from './login.less';

import { Spin, Form, Input, Button, Select ,message,Icon} from 'antd';
const FormItem = Form.Item;

/* 以类的方式创建一个组件 */
class Login extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		passwordDirty: false,
    		loginBtnText: '登录'
    	};
    }
    /**
     * 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
     * 在生命周期中的这个时间点，组件拥有一个 DOM 展现，
     * 你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
     */
    componentDidMount() { 
        const {actions} = this.props;
        // 初始化数据
        actions.initialState();
    }
  	handleSubmit = (e) => { // 登录
    	e.preventDefault();
        const {actions, form} = this.props;
	    form.validateFieldsAndScroll((err, values) => {
		    if (!err) {
                let username = values.username, // 用户名
                    password = values.password, // 密码
                    loginParams = { // 登录参数
                        username: username,
                        password: password	
                    };
		        actions.goLogin(loginParams);
		    }
	    });
	}
	// 验证用户名
	checkUsername = (rule, value, callback) => {
		const form = this.props.form;
        if (!value) {
            callback();
        } else if (!Config.checkEng(value)) {
	    	callback(Config.message.usernameEng);
	    } else {
	    	callback();
	    }
	}
	// 验证密码
	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
	    if (value && this.state.passwordDirty) {
	    	form.validateFields(['confirm'], { force: true });
	    }
	    callback();
	}
	render() {
        const { loading, loginInfo, form } = this.props;
        const getFieldDecorator = form.getFieldDecorator;
		return (
		<div className="login-container">	
			<div className="login-form">
				<Spin tip="载入中..." spinning={loading}>
					<div className="login-logo">
				        <img src={logoImage} />
				        <span>大额客户投资管理系统</span>
				    </div>
					<Form onSubmit={this.handleSubmit}>
						<FormItem >
							<Icon  type="share-alt" className="Icon-select"/>
                            {getFieldDecorator('group', { initialValue: '1'})(

								<Select defaultValue="lucy"  size='large'  >
									<Option value="1" style={{paddingLeft:'34px',fontSize:'14px'}}>夸客金融</Option>
									<Option value="2" style={{paddingLeft:'34px',fontSize:'14px'}}>夸客优富</Option>
								</Select>
                            )}
						</FormItem>
				        <FormItem hasFeedback>
							<Icon  type="user" className="Icon-input"/>
                            {getFieldDecorator('username', { initialValue: 'sosout', rules: [{ required: true, message: Config.message.usernameInput }, { validator: this.checkUsername }] })(
                                <Input size="large" placeholder="请输入账号名称" maxLength="6" />
                            )}
				        </FormItem>
				        <FormItem hasFeedback>
							<Icon  type="unlock" className="Icon-input"/>
                            {getFieldDecorator('password', { rules: [{ required: true, message: Config.message.passwordInput }, { validator: this.checkPassword }] })(
                                <Input size="large" type="password" placeholder="密码" maxLength="6" />
                            )}
				        </FormItem>
				        <FormItem>
				            <Button type="primary" htmlType="submit" size="large" loading={loginInfo.length > 0 ? true : false}>{loginInfo.length > 0 ? '登录中...' : '登录'}</Button>
				        </FormItem>
				        <div className="login-account">
                            <span>账号：sosout</span>
                            <span>密码：sosout</span>
				        </div>
			        </Form>
		        </Spin>
			</div>
		</div>
		);
	}
}

const LoginForm = Form.create()(Login);

// 将 store 中的数据作为 props 绑定到 LoginForm 上
const mapStateToProps = (state, ownProps) => {
    let { Common, Login } = state;
    return {
        loading: Common.loading,
        loginInfo: Login.loginInfo
    }
}

// 将 action 作为 props 绑定到 Product 上。
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({ initialState, goLogin }, dispatch)
});

const Main = connect(mapStateToProps, mapDispatchToProps)(LoginForm); // 连接redux

export default Main;
