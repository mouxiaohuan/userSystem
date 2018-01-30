import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';

import Config from '../config/index';
import tel from '../image/tel.png';
import yuekan from '../image/yuekan.png';
import icon from '../image/icon.png';
import jblogo from '../image/jblogo.png';

import { Layout } from 'antd';


/**
 * 公共底部
 *
 * @export
 * @className Lfooter
 * @extends {Component}
 */
export class Lfooter extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
	}
	shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (
			<div className="footer clearfix">
				<div className="footbox clearfix">
					<div className="hotline">
						<spn>全国统一客服热线:</spn>
						<span>400-680-0388</span>
						<dl><img height="91" width="91" src={tel}/></dl>
					</div>

					<div className="footdiv">
						<spn>
							<a rel="nofollow" href="http://www.quarkfinance.com/advantage/contract/">联系我们</a>
							<a rel="nofollow" href="http://www.caimigs.com" target="_blank">才米公社</a>
							<a href="#">夸客介绍</a>
							<a href="#">夸客动态</a>
							<a href="javascript:;" id="ayuekan" name="ayuekan" style={{position:'relative'}}>夸客月刊<div className="divyuekan"><img src={yuekan}/></div></a>
						</spn>
						<dl>
							<dt>联系地址：</dt>
							<dd>
								上海市黄浦区蒙自路207号5号楼
								Copyright © 2014 - 2018 www.quarkfinance.com All rights reserved 沪ICP备14052666号<br />
								<a href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020160315200201000000207495-SAIC_SHOW_310000-20170120151545668592&amp;signData=MEYCIQDG/zk+5J4jAyhvGcEidVoMOyryecmMI9pZ+BTg0LwHDgIhAP09JHqsUIiv6HhZcdzyJJfVJLvM/zW4s7hNU5mu072L" target="_blank">
									<img src={icon}/></a>
								<a href="http://www.shjbzx.cn/" target="_blank">
									<img src={jblogo}/>
								</a>

							</dd>

						</dl>
					</div>

					<div className="footcode">
						<i><img height="150" width="150" src="http://www.quarkfinance.com/images/code.png"/></i>
						<dl>SEE MORE, SHARE MORE 关注我们的微信公众号</dl>
					</div>
				</div>
			</div>
		)
	}
}