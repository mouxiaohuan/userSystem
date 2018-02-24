

import React, {Component, PropTypes} from 'react'; // react核心
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'; // 创建route所需
import Config from './config/index';
import layout from './layout/layout'; // 布局界面
import { LocaleProvider, Spin } from 'antd';
import login from './pages/login/login'; // 登录界面

class Roots extends Component {
	render() {
		// 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
		return (
			<div>{this.props.children}</div>
		);
	}
}


// 快速入门
const home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/home/homeIndex').default)
    }, 'home');
}



// 用户管理
const user = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/user/userIndex').default)
    }, 'user');
}

// 系统设置
const setting = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/setting/settingIndex').default)
    }, 'setting');
}


// 登录验证
const requireAuth = (nextState, replace) => {
	console.log(Config.localItem('USER_AUTHORIZATION'));
	let token = (new Date()).getTime() - Config.localItem('USER_AUTHORIZATION');
	if(token > 7200000) { // 模拟Token保存2个小时
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname }
		});
	}
}

const RouteConfig = (
		<Router history={browserHistory}>
			<Route path="/home" component={layout} onEnter={requireAuth}>
				<IndexRoute getComponent={home} onEnter={requireAuth} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
				<Route path="/home" getComponent={home} onEnter={requireAuth} />
				<Route path="/user" getComponent={user} onEnter={requireAuth} />
				<Route path="/setting" getComponent={setting} onEnter={requireAuth} />
			</Route>
			<Route path="/login" component={Roots}> // 所有的访问，都跳转到Roots
				<IndexRoute component={login} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
			</Route>
			<Redirect from="*" to="/home" />
		</Router>
);

export default RouteConfig;
