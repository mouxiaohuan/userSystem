import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';
import { Router, Route, IndexRoute, browserHistory, History, Link } from 'react-router';
import { connect } from 'react-redux';

// 公共面包屑


import './home.less';
import userIcon from "../../image/userIcon.jpg"

import { Icon, Row, Col, Card, Steps, Button, message } from 'antd';
const Step = Steps.Step;


/* 以类的方式创建一个组件 */
class Pay extends Component {
    constructor(props) {
    	super(props);
        this.state = {
             current: 0
        };
    }
	render() {
		return (
        <div className="home-container">
            <Card bordered={true}>
                <div className="user-left">
                    <div className="icon"><img src={userIcon}/></div>
                    <div className="info">
                        欢迎您！牟小欢<br/>
                        135*******2589<br/>
                        上海夸客金融信息服务有限公司
                    </div>
                </div>
                <div className="user-right">
                    <div className="balance">
                        账户余额（元）<br/>
                        <span>10.00</span>
                    </div>
                    <div className="pay">
                        <Button type="primary" icon="wallet" size='large'>充值</Button>
                    </div>
                </div>
            </Card>
            {/*<Card*/}
                {/*loading={loading}*/}
                {/*className={styles.salesCard}*/}
                {/*bordered={false}*/}
                {/*title="销售额类别占比"*/}
                {/*bodyStyle={{ padding: 24 }}*/}
                {/*extra={*/}
                    {/*<div className={styles.salesCardExtra}>*/}
                        {/*{iconGroup}*/}
                        {/*<div className={styles.salesTypeRadio}>*/}
                            {/*<Radio.Group value={salesType} onChange={this.handleChangeSalesType}>*/}
                                {/*<Radio.Button value="all">全部渠道</Radio.Button>*/}
                                {/*<Radio.Button value="online">线上</Radio.Button>*/}
                                {/*<Radio.Button value="offline">门店</Radio.Button>*/}
                            {/*</Radio.Group>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*}*/}
                {/*style={{ marginTop: 24, minHeight: 509 }}*/}
            {/*>*/}
                {/*<h4 style={{ marginTop: 8, marginBottom: 32 }}>销售额</h4>*/}
                {/*<Pie*/}
                    {/*hasLegend*/}
                    {/*subTitle="销售额"*/}
                    {/*total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}*/}
                    {/*data={salesPieData}*/}
                    {/*valueFormat={val => yuan(val)}*/}
                    {/*height={248}*/}
                    {/*lineWidth={4}*/}
                {/*/>*/}
            {/*</Card>*/}
        </div>
		);
	}
}

export default Main;