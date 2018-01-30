import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';
import Config from '../config/index';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
/**
 * 公共菜单
 *
 * @export
 * @class Lmenu
 * @extends {Component}
 */
export class Lmenu extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象

	}

	render() {
		return (
			<div className="lmenu">
				<span>我的账户</span>
				<div className="lmenu-item active" >
					<Link to="/user">
						<Icon type="appstore-o" />
                        <span className="nav-text">账户总览</span>
					</Link>
				</div>
				<div className="lmenu-item">
					<Link to="/user">
						<Icon type="pay-circle-o" />
						<span className="nav-text">我的投资</span>
					</Link>

				</div>
				<div className="lmenu-item">
					<Link to="/user">
						<Icon type="user" />
						<span className="nav-text">账户管理</span>
					</Link>

				</div>
				<div className="lmenu-item ">
					<Link to="/user" >
						<Icon type="solution" />
						<span className="nav-text">基本信息</span>
					</Link>

				</div>
				<div className="lmenu-item ">
					<Link to="/user" >
						<Icon type="safety" />
						<span className="nav-text">安全中心</span>
					</Link>

				</div>
				<div className="lmenu-item ">
					<Link to="/user" >
						<Icon type="credit-card" />
						<span className="nav-text">银行卡信息</span>
					</Link>
				</div>
				<div className="lmenu-item ">
					<Link to="/user" >
						<Icon type="notification" />
						<span className="nav-text">我的消息</span>
					</Link>

				</div>

			</div>

		)
	}
}