/**
 * 记住 页面
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-05 15:48:35
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/remember';
import RememberSwiper from '../components/Swipers/remember-swiper'
import DefaultTemplate from '../components/PageTemplate/defaults';

import '../less/pages/remember.less';


class RememberContent extends Component {
    //构造器
    constructor (props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
            bannerList: [
                { img: 'https://tuimeizi.cn/random?s=false&w=640&h=250', text: '文本', link: '' },
                { img: 'https://tuimeizi.cn/random?s=false&w=641&h=251', text: '文本', link: '' },
                { img: 'https://tuimeizi.cn/random?s=false&w=642&h=252', text: '文本', link: '' }
            ]
        };
    }
	render() {
        let data = this.props.data;
		return (
			<div className="page-remember">
                <RememberSwiper data={this.state.bannerList} />
                <a className="floor-btn-new" href="javascript:;"></a>
                <div className="remember-wrap">
                    <div className="remember-nodata">
                        <span className="nodata-logo"></span>
                        <a href="javascript:;" className="remember-btn-new"></a>
                    </div>
                    <div className="data-list hide">
                        <span className="remember-tip"></span>
                        <div className="data-list-wrap">
                            <div className="data-list-item">
                                <div className="item-base-info">
                                    <img className="thumb" src="https://tuimeizi.cn/random?s=false&w=180&h=180" />
                                    <div className="info-text">
                                        <span className="name">
                                            <label className="relation-name">外公</label>
                                            <label className="real-name">（李国强）</label>
                                            <label className="home-name">寻梦家园</label>
                                            <label className="age man">85岁</label>
                                        </span>
                                        <span className="relation">
                                            <label className="relation-lab">
                                                <i className="icon-lab-item yellow"></i>
                                                亲友 103
                                                <i className="split-line"></i>
                                            </label>
                                            <label className="relation-lab">
                                                <i className="icon-lab-item green"></i>
                                                上香 102
                                                <i className="split-line"></i>
                                            </label>
                                            <label className="relation-lab">
                                                <i className="icon-lab-item blue"></i>
                                                祈福 101
                                            </label>
                                        </span>
                                        <i className="split-line-block"></i>
                                        <span className="sacrifice">
                                            <label className="live">生</label>
                                            农历1933年
                                        </span>
                                        <span className="sacrifice">
                                            <label className="die">祭</label>
                                            农历2015年
                                        </span>
                                    </div>
                                </div>
                                <div className="dynamic">
                                    <span className="dynamic-item">
                                        <label className="dynamic-lab dollar">美元</label>
                                        李强（儿子）送1000美元
                                        <label className="date">刚刚</label>
                                    </span>
                                    <span className="dynamic-item">
                                        <label className="dynamic-lab flower">鲜花</label>
                                        李莉（孙女）送鲜花一束
                                        <label className="date">3小时前</label>
                                    </span>
                                    <span className="dynamic-item">
                                        <label className="dynamic-lab gold">黄金</label>
                                        蔡杰（外孙女）送8888两黄金
                                        <label className="date">13个月前</label>
                                    </span>
                                </div>
                            </div>
                            <div className="data-list-item">
                                <div className="item-base-info">
                                    <img className="thumb" src="https://tuimeizi.cn/random?s=false&w=180&h=180" />
                                    <div className="info-text">
                                        <span className="name">
                                            <label className="relation-name">外公</label>
                                            <label className="real-name">（李国强）</label>
                                            <label className="home-name">寻梦家园</label>
                                            <label className="age man">85岁</label>
                                        </span>
                                        <span className="relation">
                                            <label className="relation-lab">
                                                <i className="icon-lab-item yellow"></i>
                                                亲友 103
                                                <i className="split-line"></i>
                                            </label>
                                            <label className="relation-lab">
                                                <i className="icon-lab-item green"></i>
                                                上香 102
                                                <i className="split-line"></i>
                                            </label>
                                            <label className="relation-lab">
                                                <i className="icon-lab-item blue"></i>
                                                祈福 101
                                            </label>
                                        </span>
                                        <i className="split-line-block"></i>
                                        <span className="sacrifice">
                                            <label className="live">生</label>
                                            农历1933年
                                        </span>
                                        <span className="sacrifice">
                                            <label className="die">祭</label>
                                            农历2015年
                                        </span>
                                    </div>
                                </div>
                                <div className="dynamic">
                                    <span className="dynamic-item">
                                        <label className="dynamic-lab dollar">美元</label>
                                        李强（儿子）送1000美元
                                        <label className="date">刚刚</label>
                                    </span>
                                    <span className="dynamic-item">
                                        <label className="dynamic-lab flower">鲜花</label>
                                        李莉（孙女）送鲜花一束
                                        <label className="date">3小时前</label>
                                    </span>
                                    <span className="dynamic-item">
                                        <label className="dynamic-lab gold">黄金</label>
                                        蔡杰（外孙女）送8888两黄金
                                        <label className="date">13个月前</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

class Remember extends Component {
	componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getDatas());
    }
    render() {
        return (
        	<DefaultTemplate content={RememberContent} params={this.props.isFetching ? null : this.props.data} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.Remember.isFetching,
    data: state.Remember.data
});

export default connect(mapStateToProps)(Remember);

