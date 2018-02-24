import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { is, fromJS } from 'immutable';
import { Layout, Menu, Icon } from 'antd';
import Config from '../config/index';
const SubMenu = Menu.SubMenu;
const { Header } = Layout;
import serviceIcon from '../image/service.png';
import unread from '../image/unread.png';
import logo from "../image/logo.png"


/**
 * 公共头部
 *
 * @export
 * @class Lheader
 * @extends {Component}
 */
export class Lheader extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
	}
	shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	toggle = () => {
		this.props.toggle(!this.props.collapsed);
  	}
  	logout= (e) => {
		Config.removeLocalItem(Config.localKey.userToken);
		this.context.router.push({
			pathname: '/login'
		});
	}
	render() {
		return (
			<Header className="layout-header">
				<div className="header-top" >
					<img src={serviceIcon} className="service-image" />
					<span className="service">客服热线：<strong>400-680-0388 </strong>(人工9:00~18:00)</span>

					<span style={{float:'right',margin:'auto 0  0 15px'}}> 帮着中心</span>
					<span style={{float:'right',margin:'auto 0  0 15px',borderLeft:'1px solid #dadada',height: '25px',
                        marginTop:'8px'}}> </span>
					<div style={{float:'right'}}>
						<span style={{float:'right'}}> 未读消息 117</span>
						<img src={unread} style={{float:'right',marginTop:'15px'}} className="service-image" />
					</div>
					<span  style={{float:'right',margin:'auto 10px',cursor: 'pointer'}} onClick={this.logout}>【安全退出】</span>
					<span style={{float:'right',margin:'auto 5px'}}>欢迎您！ XiaohuanMou</span>
				</div>
				<div className="header-bottom">
					<img src={logo} style={{float:'left',marginTop:'15px'}} />
					<span className="logo-line">
					</span>
					<span className="logo-info">让积累更有价值</span>
					<div className="navigation">
						<div className="navigation-item">首页</div>
						<div className="navigation-item">关于我们</div>
						<div className="navigation-item active">我要投资</div>
						<div className="navigation-item">我的账户</div>
					</div>
				</div>

	            {/*<Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />*/}
	            {/*<Menu mode="horizontal" onClick={this.logout} className="layout-header-menu">*/}
                {/*<SubMenu title={<span><Icon type="user" />sosout</span>}>*/}
		        	{/*<Menu.Item key="logout">注销</Menu.Item>*/}
                {/*</SubMenu>*/}
                {/*</Menu>*/}
	        </Header>
		)
	}
}

Lheader.contextTypes = {
    router: React.PropTypes.object.isRequired
};