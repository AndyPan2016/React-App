/**
 * 测试页
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-09 15:17:12
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/test';
import Popup from '../components/_Commons/Popup';
import RememberSwiper from '../components/Swipers/remember-swiper'
import DefaultTemplate from '../components/PageTemplate/defaults';
import SwitchButton from '../components/_Commons/SwitchButton';
import RadioButton from '../components/_Commons/RadioButton';
import FormInput from '../components/_Commons/FormInput';


import '../less/pages/homedetail.less';


class TestContent extends Component {
    //构造器
    constructor (props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
            popupState: false,
            rememberPopupState: false,
            incensePopupState: false,
            relationPopupState: false,
            tipPopupState: false,
            tipPopupText: '提示内容'
        };
    }
	render() {
        let data = this.props.data;
		return (
			<div className="page-index page-home-detail">
                (测试)
                {
                    data ? (data.map((item, idx)=>(
                            <span key={idx}>{item.item1}{item.item2}</span>
                        )
                    )) : (null)
                }
                
                <RememberSwiper />
                <a href="javascript:;" onClick={this.openPopup.bind(this)}>弹窗模型</a>
                {
                    this.state.popupState ? (<Popup show={true} type="downup" title="自定义标题" text="自定义内容" onClosed={this.closePopup.bind(this)} />) : (null)
                }

                <a href="javascript:;" onClick={this.openPopupRemember.bind(this)}>记住</a> | 
                {
                    this.state.rememberPopupState ? (
                        <Popup show={true} className="remember-popup" type="downup" 
                            title="记住" 
                            tempView={RememberPopupTemp} 
                            onClosed={this.closePopupRemember.bind(this)} />
                    ) : (null)
                }
                <a href="javascript:;" onClick={this.openPopupIncense.bind(this)}>上香</a> | 
                {
                    this.state.incensePopupState ? (
                        <Popup show={true} className="remember-popup" type="downup" 
                            title="上香" 
                            tempView={IncensePopupTemp}
                            onClosed={this.closePopupIncense.bind(this)} />
                    ) : (null)
                }
                <a href="javascript:;" onClick={this.openPopupRelation.bind(this)}>修改关系</a>
                {
                    this.state.relationPopupState ? (
                        <Popup show={true} 
                            title="修改关系" 
                            tempView={UpdateRelationship}
                            onClosed={this.closePopupRelation.bind(this)}
                            buttons={({
                                cancel: {text: '取消', type: 'cancel', handle: this.updateBtnCancel.bind(this)},
                                sure: {text: '保存', type: 'sure', handle: this.updateBtnSave.bind(this)}
                            })}
                            />
                    ) : (null)
                }
                {
                    this.state.tipPopupState ? (
                        <Popup show={true} type="tip" timeout="3000" 
                            text={this.state.tipPopupText} 
                            onClosed={this.hideTip.bind(this)} />
                    ) : (null)
                }
                <SwitchButton checked={false} onSwitch={this.switchEvent.bind(this)} />
                <RadioButton name="rad1" text="单选" />
                <RadioButton name="rad1" text="单选" />
                <RadioButton name="rad2" text="单选" />
                <RadioButton name="rad2" text="单选" />


                <div className="form-wrap">
                    <FormInput type="title" titleText="基础信息" />
                    <FormInput tipText="真实姓名" placeholder="请输入姓名" />
                    <FormInput tipText="守护者" value="张三" forward="/login" />
                    <FormInput tipText="简介" type="textarea" placeholder="请输入姓名" />
                </div>
			</div>
		);
	}
    openPopup() {
        this.setState({popupState: true});
    }
    closePopup() {
        this.setState({popupState: false});
    }
    switchEvent(state) {
        console.info(state);
    }
    updateBtnSave() {
        console.info('save');
        this.showTip();
        return false;
    }
    updateBtnCancel() {
        //console.info('cancel');
    }
    openPopupRemember() {
        this.setState({rememberPopupState: true});
    }
    closePopupRemember() {
        this.setState({rememberPopupState: false});
    }
    openPopupIncense() {
        this.setState({incensePopupState: true});
    }
    closePopupIncense() {
        this.setState({incensePopupState: false});
    }
    openPopupRelation() {
        this.setState({relationPopupState: true});
    }
    closePopupRelation() {
        this.setState({relationPopupState: false});
    }
    showTip(txt) {
        if(txt){
            this.setState({
                tipPopupText: txt
            });
        }
        this.setState({
            tipPopupState: true
        });
    }
    hideTip() {
        this.setState({
            tipPopupState: false
        });
    }
}

//弹窗-修改关系
class UpdateRelationship extends Component {
    render() {
        return (
            <div className="update-relation-ship">
                <form className="form-wrap relation-ship-form">
                    <div className="form-item-rows">
                        <label className="form-item-lab">尊称</label>
                        <span className="form-item-inp">
                            <input type="text" className="form-inp" placeholder="请输入尊称" />
                        </span>
                    </div>
                    <div className="form-item-rows">
                        <label className="form-item-lab">关系</label>
                        <span className="form-item-inp">
                            <input type="text" className="form-inp" placeholder="请输入关系" />
                        </span>
                    </div>
                    <div className="form-item-rows">
                        <label className="form-item-lab">姓名</label>
                        <span className="form-item-inp">
                            <input type="text" className="form-inp" placeholder="请输入你的姓名" />
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

//弹窗-上香内容模板
class IncensePopupTemp extends Component {
    render() {
        return (
            <div className="incense-popup-temp">
                <div className="incense-item-wrap">

                    <div className="incense-item">
                        <div className="incense-item-cont">
                            <img src="https://tuimeizi.cn/random?s=false&w=290&h=290" className="thumb" />
                            <span className="produce-detail">
                                <label className="produce-name">一柱清香(一心敬礼)</label>
                                <label className="produce-price">￥1.8元</label>
                                <a href="javascript:;" className="produce-btn-shop">立即购买</a>
                            </span>
                        </div>
                    </div>
                    <div className="incense-item">
                        <div className="incense-item-cont">
                            <img src="https://tuimeizi.cn/random?s=false&w=290&h=290" className="thumb" />
                            <span className="produce-detail">
                                <label className="produce-name">一柱清香(一心敬礼)</label>
                                <label className="produce-price">￥1.8元</label>
                                <a href="javascript:;" className="produce-btn-shop">立即购买</a>
                            </span>
                        </div>
                    </div>
                    <div className="incense-item">
                        <div className="incense-item-cont">
                            <img src="https://tuimeizi.cn/random?s=false&w=290&h=290" className="thumb" />
                            <span className="produce-detail">
                                <label className="produce-name">一柱清香(一心敬礼)</label>
                                <label className="produce-price">￥1.8元</label>
                                <a href="javascript:;" className="produce-btn-shop">立即购买</a>
                            </span>
                        </div>
                    </div>
                    <div className="incense-item">
                        <div className="incense-item-cont">
                            <img src="https://tuimeizi.cn/random?s=false&w=290&h=290" className="thumb" />
                            <span className="produce-detail">
                                <label className="produce-name">一柱清香(一心敬礼)</label>
                                <label className="produce-price">￥1.8元</label>
                                <a href="javascript:;" className="produce-btn-shop">立即购买</a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

//弹窗-记住内容模板
class RememberPopupTemp extends Component {
    render() {
        return (
            <div className="remember-popup-temp">
                <span className="remember-txt">
                    <label className="remember-remark">记住</label>
                    《灵魂的家园》平台将根据天国的亲友的生辰、忌辰、以及春节、清明节、寒衣节、中元节、冬至等日期通过短信、微信等方式提醒各位亲友，勿忘这些重要的日子。
                </span>
                <div className="remember-handle">
                    <a href="javascript:;" className="remember-btn disabled"></a>
                </div>
            </div>
        );
    }
}

class Test extends Component {
	componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getDatas());
    }
    render() {
        return (
        	<DefaultTemplate content={TestContent} params={this.props.isFetching ? null : this.props.data} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.Test.isFetching,
    data: state.Test.data
});

export default connect(mapStateToProps)(Test);
