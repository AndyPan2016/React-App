/**
 * 天国快递 页面
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-08 11:30:03
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/heaven-express';
import DefaultTemplate from '../components/PageTemplate/defaults';

import '../less/pages/heavenexpress.less';

class HeavenExpressContent extends Component {
	render() {
        let data = this.props.data;
		return (
			<div className="page-heaven-express">
				<div className="my-order-wrap">
                    <a href="javascript:;" className="recommend">
                        <img className="thumb" src="https://tuimeizi.cn/random?s=false&w=556&h=300" />
                    </a>
                    <div className="my-order-handle">
                        <span className="order-tip">
                            <i className="icon-order"></i>
                            我的快递订单
                            <label className="order-tip-count">待支付2件</label>
                        </span>
                    </div>
                </div>
                <div className="order-list-wrap">
                    <a href="javascript:;" className="order-list-item">
                        <span className="price-wrap">
                            <label className="price-now">
                                188
                                <font>元</font>
                            </label>
                            <label className="price-old">288.00元</label>
                        </span>
                        <img src="https://tuimeizi.cn/random?s=false&w=100&h=100" className="thumb" />
                        <span className="item-name">实物鲜花</span>
                        <span className="item-remark">定制鲜花次日抵达全国配送</span>
                    </a>
                    <a href="javascript:;" className="order-list-item">
                        <span className="price-wrap">
                            <label className="price-now">
                                188
                                <font>元</font>
                            </label>
                            <label className="price-old">288.00元</label>
                        </span>
                        <img src="https://tuimeizi.cn/random?s=false&w=100&h=100" className="thumb" />
                        <span className="item-name">实物鲜花</span>
                        <span className="item-remark">定制鲜花次日抵达全国配送</span>
                    </a>
                    <a href="javascript:;" className="order-list-item">
                        <span className="price-wrap">
                            <label className="price-now">
                                188
                                <font>元</font>
                            </label>
                            <label className="price-old">288.00元</label>
                        </span>
                        <img src="https://tuimeizi.cn/random?s=false&w=100&h=100" className="thumb" />
                        <span className="item-name">实物鲜花</span>
                        <span className="item-remark">定制鲜花次日抵达全国配送</span>
                    </a>
                </div>
			</div>
		);
	}
}

class HeavenExpressPage extends Component {
	componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getDatas());
    }
    render() {
        return (
        	<DefaultTemplate content={HeavenExpressContent} params={this.props.isFetching ? null : this.props.data} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.HeavenExpress.isFetching,
    data: state.HeavenExpress.data
});

export default connect(mapStateToProps)(HeavenExpressPage);
