/**
 * Header
 * @authors AndyPan (pye-mail@163.com)
 * @date    2017-12-19 10:22:43
 */

import React from 'react';

import Popup from '../Popup';

import './view.less';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginState: false,
			registState: false
		}
	}
	render() {
		return (
			<div className="page-header-wrap">
				<div className="fn-wrap">
					{
						this.state.loginState ? (
							<Popup show={true} title="登录" type="login" onClose={this.popupClose.bind(this)} />
						) : (null)
					}
					{
						this.state.registState ? (
							<Popup show={true} title="注册" type="regist" onClose={this.popupClose.bind(this)} />
						) : (null)
					}
					<span className="user">
						<a onClick={this.login.bind(this)} className="user-item">登录</a>
						<a onClick={this.regist.bind(this)} className="user-item">注册</a>
					</span>
				</div>
			</div>
		)
	}
	popupClose() {
		this.setState({
			loginState: false,
			registState: false
		});
	}
	login(){
		this.setState({
			loginState: true
		});
	}
	regist() {
		this.setState({
			registState: true
		});
	}
}

export default Header;

