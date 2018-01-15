/**
 * 公众家园 页面
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-08 10:37:18
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/public-home';
import DefaultTemplate from '../components/PageTemplate/defaults';
import PublicHomeHeader from '../components/PublicHomeHeader';

import '../less/pages/publichome.less';


class PublicHomeContent extends Component {
	render() {
        let data = this.props.data;
		return (
			<div className="page-public-home">
                <PublicHomeHeader onSortSwitch={this.headerNavSwitch.bind(this)} />
				<div className="data-list">
                    <div className="data-list-wrap">

                        <div className="list-item-wrap">
                            <a href="/homedetail" className="list-item">
                                <span className="thumb-wrap">
                                    <img src="https://tuimeizi.cn/random?s=false&w=290&h=290" className="thumb" />
                                </span>
                                <span className="item-info">
                                    <label className="item-name">外公灵魂家园</label>
                                    <label className="item-age man">83岁</label>
                                    <span className="item-detail">
                                        <label>记住10</label>
                                        <label>上香800</label>
                                        <label>祈福9000</label>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="list-item-wrap">
                            <a href="/homedetail" className="list-item">
                                <span className="thumb-wrap">
                                    <img src="https://tuimeizi.cn/random?s=false&w=290&h=290" className="thumb" />
                                </span>
                                <span className="item-info">
                                    <label className="item-name">奶奶灵魂家园</label>
                                    <label className="item-age woman">83岁</label>
                                    <span className="item-detail">
                                        <label>记住10</label>
                                        <label>上香800</label>
                                        <label>祈福9000</label>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="list-item-wrap">
                            <a href="/homedetail" className="list-item">
                                <span className="thumb-wrap">
                                    <img src="https://tuimeizi.cn/random?s=false&w=290&h=290" className="thumb" />
                                </span>
                                <span className="item-info">
                                    <label className="item-name">奶奶灵魂家园</label>
                                    <label className="item-age woman">83岁</label>
                                    <span className="item-detail">
                                        <label>记住10</label>
                                        <label>上香800</label>
                                        <label>祈福9000</label>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div className="list-item-wrap">
                            <a href="/homedetail" className="list-item">
                                <span className="thumb-wrap">
                                    <img src="https://tuimeizi.cn/random?s=false&w=290&h=290" className="thumb" />
                                </span>
                                <span className="item-info">
                                    <label className="item-name">外公灵魂家园</label>
                                    <label className="item-age man">83岁</label>
                                    <span className="item-detail">
                                        <label>记住10</label>
                                        <label>上香800</label>
                                        <label>祈福9000</label>
                                    </span>
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
			</div>
		);
	}
    headerNavSwitch(nav){
        console.info(nav);
    }
}

class PublicHomePage extends Component {
	componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getDatas());
    }
    render() {
        return (
        	<DefaultTemplate content={PublicHomeContent} params={this.props.isFetching ? null : this.props.data} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.PublicHome.isFetching,
    data: state.PublicHome.data
});

export default connect(mapStateToProps)(PublicHomePage);

