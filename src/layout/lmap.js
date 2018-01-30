import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';

import Config from '../config/index';

import { Icon } from 'antd';

export class Lmap extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
	}
	shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (
			<div className="local-map">
				<div className="local-map-item ">我的账户</div>
				<div className="local-map-item"><Icon type="right" /></div>
				<div className="local-map-item active ">账户总览</div>
	        </div>
		)
	}
}