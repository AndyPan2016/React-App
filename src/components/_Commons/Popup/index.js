/**
 * Popup
 * @authors AndyPan (pye-mail@163.com)
 * @date    2017-12-19 11:10:48
 */

import React from 'react';

import TempRegist from './temp-regist';
import TempLogin from './temp-login';

import './view.less';

let templates = {
	default: null,
	regist: TempRegist,
	login: TempLogin,
	alert: '',
	wram: '',
	success: '',
	info: ''
};

class Popup extends React.Component {
	//构造器
	constructor (props) {
		super(props);
		this.init();
	}
	//初始化
	init() {
		var props = this.props;
		this.state = {
			//是否显示
			show: props.show === true || props.show === 'true' ? true : false,
			showState: false,
			clickMaskHide: props.clickMaskHide === true ? true : false,
			//自定义className
			customClassName: props.className || '',
			//标题
			title: props.title,
			//文本
			text: props.text || '',
			//定时器时间
			timeout: props.timeout || 0,
			//自定义模板视图
			tempView: props.tempView,
			//弹出框类型(default：默认中间显示，downup：移动端由下往上显示)
			type: props.type || 'default',
			//内置模板视图类型
			tempViewType: props.type || 'default',
			//关闭事件(关闭前)
			onClose: props.onClose,
			//关闭事件(关闭后)
			onClosed: props.onClosed,
			//显示事件(显示前)
			onShow: props.onShow,
			//确定按钮文本
			sureText: props.sureText,
			//确定按钮自定义操作
			sureHandle: props.sureHandle,
			//取消按钮文本
			cancelText: props.cancelText,
			//取消按钮自定义操作
			cancelHandle: props.cancelHandle,
			//自定义按钮集合(注：sureText、sureHandle、cancelText、cancelHandle的优先级高于buttons中相同类型的按钮)
			buttons: props.buttons,
			/*buttons: props.buttons === undefined ? ({
				sure: {text: 'sure', type: 'sure', handle: null},
				cancel: {text: 'cancel', type: 'cancel', handle: null},
			}) : (props.buttons),*/
			//动画延迟
			delay: 10
			/*buttons: this.props.buttons || {
				sure: {text: 'sure', type: 'sure', handle: null},
				cancel: {text: 'cancel', type: 'cancel', handle: null},
				//customkeybyany: {text: 'custom', type: 'cancel', handle: null}
			}*/
		};

		//options统一state对象
		var propsOptions = this.props.options;
		if(propsOptions){
			//props.options对state集合的设置优先级高于props对单个属性设置
			for(var key in propsOptions){
				this.state[key] = propsOptions[key];
			}
		}

		var tempViewType = this.state.tempViewType;
		if(!this.state.tempView){
			this.state.tempView = templates[tempViewType];
		}

		this.renderButtonParams(this);
	}
	render(){
		var state = this.state;
		var buttons = state.buttons;
		var buttonsAry = state.buttonsAry;
		var TempView = state.tempView;

		return (
			<div className={'popup-main-wrap '+(state.type || '')+(' '+state.customClassName)+(state.showState === true ? ' show' : '')}>
				<div className="popup-mask" onClick={this.maskClick.bind(this)}></div>
				<div className="popup-main">
					<div className="popup-header">
						<span className="popup-header-title">{state.title}</span>
						<a className="popup-btn-close" onClick={this.close.bind(this)}></a>
					</div>
					<div className="popup-body">
						{
							TempView ? (<TempView />) : (state.text)
						}
					</div>
					<div className={buttons ? "popup-footer" : "popup-footer hide"}>
						{
							buttons ? (
									buttonsAry.map(this.renderButtons.bind(this))
							) : (null)
						}
					</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		if(this.state.show){
			setTimeout(() => {
				this.setState({showState: true});
			}, this.state.delay);
			
			let timeout = this.state.timeout;
			if(timeout){
				setTimeout(() => {
					this.close();
				}, timeout);
			}
		}
	}
	renderButtonParams(){
		var state = this.state;
		var buttons = state.buttons;
		var sureText = state.sureText,
			sureHandle = state.sureHandle,
			cancelText = state.cancelText,
			cancelHandle = state.cancelHandle;

		if(sureText || cancelText){
			this.state.buttons = buttons || {};
			if(sureText){
				this.state.buttons.sure = this.state.buttons.sure || {};
				this.state.buttons.sure.text = sureText;
				this.state.buttons.sure.type = this.state.buttons.sure.type || 'sure';
				if(sureHandle){
					this.state.buttons.sure.handle = sureHandle;
				}
			}
			if(cancelText){
				this.state.buttons.cancel = this.state.buttons.cancel || {};
				this.state.buttons.cancel.text = cancelText;
				this.state.buttons.cancel.type = this.state.buttons.cancel.type || 'cancel';
				if(cancelHandle){
					this.state.buttons.cancel.handle = sureHandle;
				}
			}
		}

		this.state.buttonsAry = [];
		buttons = state.buttons;
		for(var key in buttons){
			this.state.buttonsAry.push(buttons[key]);
		}
	}
	renderButtons(button, key){
		return (
			<a className={"popup-btn "+button.type} key={key} onClick={()=>{this.buttonEvent(button.type)}} data-type={button.type}>{button.text}</a>
		);
	}
	buttonEvent(key){
		var buttons = this.state.buttons, result;
		if(buttons){
			var button = buttons[key];
			if(button){
				var handle = button.handle;
				if(handle){
					result = handle();
				}
			}
		}

		if(result !== false){
			this.close();
		}
	}
	maskClick(){
		if(this.state.type === 'downup' || this.state.clickMaskHide){
			this.close();
		}
	}
	show(){
		if(!this.state.showState){
			var onShow = this.state.onShow, result;
			if(onShow)
				result = onShow();

			if(result !== false){
				setTimeout(() => {
					this.setState({showState: true});
				}, this.state.delay);
			}
		}
	}
	close(){
		if(this.state.showState){
			var onClose = this.state.onClose, result;
			if(onClose)
				result = onClose();

			if(result !== false){
				let delay = this.state.delay,
					type = this.state.type;

				setTimeout(() => {
					this.setState({showState: false});
					setTimeout(() => {
						var onClosed = this.state.onClosed;
						if(onClosed)
							onClosed();
					}, (type === 'default' ? 0 : delay + 500));
				}, delay);
			}
		}
	}
}

export default Popup;

