/**
 * 家园设置-非守护者-未填写
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-15 14:47:19
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/home-set';
import Popup from '../components/_Commons/Popup';
import FormInput from '../components/_Commons/FormInput';

import '../less/pages/homeset.less';

class HomeSet extends Component {
    //构造器
    constructor (props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
        	status: 'add'
        };
    }
	render() {
        let data = this.props.data;
        let state = this.state;
        return (
        	<div>
	        {
	        	state.status === 'add' ? (<NewHomeInfo />) : (<HomeInfo />)
	        }
	        </div>
        )
    }
}

//编辑家园信息
class HomeInfo extends Component {
	//构造器
    constructor (props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
        	qrcodePopupState: false
        };
    }
	render() {
        let data = this.props.data;
        return (
        	<div className="page-home-set form-wrap">
        		<div className="home-set-name">张永发的灵魂家园</div>
        		<FormInput tipText="真实姓名" value="张永发" placeholder="请输入真实姓名" />
        		<FormInput tipText="尊称" placeholder="请输入对逝者的称呼" />
        		<FormInput tipText="关系" placeholder="请输入您与逝者的关系" />
        		<FormInput tipText="我的姓名" placeholder="请输入您的姓名" />
        		<span className="split-space"></span>
        		<FormInput tipText="灵魂的守护者" placeholder="请输入灵魂的守护者" />
        		<FormInput tipText="转发家园二维码" qrCode={true} onClick={this.showQRCodePopup.bind(this)} />
        		{
                    this.state.qrcodePopupState ? (
                        <Popup show={true} 
                            title="长按保存下方二维码" 
                            tempView={QRCode} 
                            clickMaskHide={true} 
                            onClosed={this.hideQRCodePopup.bind(this)}
                            />
                    ) : (null)
                }
                <div className="public-number-wrap">
                	<div className="public-number-qrcode">
                		<img src={require('../images/public-number-qrcode.png')} className="thumb" />
                		<label className="remark">WAITER微信公众号</label>
                	</div>
                </div>
                <div className="bottom-handle">
                	<a href="javascript:;" className="bottom-handle-item">取消</a>
                	<a href="javascript:;" className="bottom-handle-item sure">确定</a>
                </div>
        	</div>
        )
    }
    showQRCodePopup() {
    	this.setState({
    		qrcodePopupState: true
    	});
    }
    hideQRCodePopup() {
    	this.setState({
    		qrcodePopupState: false
    	});
    }
}

//新增家园信息
class NewHomeInfo extends Component {
	//构造器
    constructor (props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
        	qrcodePopupState: false
        };
    }
	render() {
        let data = this.props.data;
        return (
        	<div className="page-home-set form-wrap">
        		<div className="home-set-name">张永发的灵魂家园</div>
                <FormInput type="title" titleText="基础信息" />
        		<FormInput tipText="真实姓名" value="张永发" placeholder="请输入真实姓名" />
        		<FormInput tipText="尊称" placeholder="请输入对逝者的称呼" />
        		<FormInput tipText="关系" placeholder="请输入您与逝者的关系" />
                <FormInput tipText="守护者" value="张三" forward="/#" />
        		<span className="split-space"></span>

                <FormInput type="title" titleText="生平资料" />
                <FormInput tipText="生平简介" type="textarea" placeholder="请输入生平简介" />
        		<FormInput type="date" tipText="生辰" placeholder="请选择年月日" />
        		<FormInput type="date" tipText="忌辰" placeholder="请选择年月日" />
        		<span className="split-space"></span>

                <FormInput type="title" titleText="其他设置" />
                <FormInput tipText="墓地位置" value="未设置" forward="/#" />
                <FormInput tipText="3D场景" value="未设置" forward="/#" />
                <FormInput tipText="背景音乐" value="未设置" forward="/#" />
        		<FormInput tipText="转发家园二维码" disabled={true} placeholder="家园新建后生成二维码" />
        		<FormInput tipText="转发家园二维码" qrCode={true} onClick={this.showQRCodePopup.bind(this)} />
        		{
                    this.state.qrcodePopupState ? (
                        <Popup show={true} 
                            title="长按保存下方二维码" 
                            tempView={PublicNumberQRCode} 
                            clickMaskHide={true} 
                            onClosed={this.hideQRCodePopup.bind(this)}
                            />
                    ) : (null)
                }
                
                <div className="bottom-handle">
                	<a href="javascript:;" className="bottom-handle-item">取消</a>
                	<a href="javascript:;" className="bottom-handle-item sure">新建家园</a>
                </div>
        	</div>
        )
    }
    showQRCodePopup() {
    	this.setState({
    		qrcodePopupState: true
    	});
    }
    hideQRCodePopup() {
    	this.setState({
    		qrcodePopupState: false
    	});
    }
}

class QRCode extends Component {
	render() {
		return (
			<div className="popup-qrcode-wrap">
				<img className="thumb" src={require('../images/qr-code.png')} />
				<span className="remark">张永发的灵魂家园</span>
			</div>
		)
	}
}
class PublicNumberQRCode extends Component {
	render() {
		return (
			<div className="popup-qrcode-wrap">
				<img className="thumb" src={require('../images/qr-code.png')} />
				<span className="remark">公众号二维码</span>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.HomeSet.isFetching,
    data: state.HomeSet.data
});


export default connect(mapStateToProps)(HomeSet);

