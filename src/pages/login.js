/**
 * 登录
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-09 15:46:55
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/login';

import '../less/pages/login.less';

class LoginPage extends Component {
    //构造器
    constructor (props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
        };
    }
    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getDatas());
    }
	render() {
        let data = this.props.data;
        let isFetching = this.props.isFetching;
		return (
			<div className="page-login">
				<div className="page-login-wrap">
	                {/*<a href="javascript:;" className="website-logo"></a>*/}
	                <div className="form-wrap login-form">
	                	<span className="form-item-rows">
	                		<label className="form-item-lab">
	                			<i className="form-icon icon-phone"></i>
	                		</label>
	                		<span className="form-item-inp">
	                			<input type="text" className="form-inp" placeholder="请输入验手机号" />
	                		</span>
	                	</span>
	                	<span className="form-item-rows">
	                		<label className="form-item-lab">
	                			<i className="form-icon icon-code"></i>
	                		</label>
	                		<span className="form-item-inp">
	                			<input type="text" className="form-inp form-inp-short" placeholder="请输入验证码" />
	                			<a href="javascript:;" className="btn-send-code disabled">发送验证码</a>
	                		</span>
	                	</span>
	                	<span className="form-item-rows footer">
	                		<a href="/remember" className="form-btn-login">登录</a>
	                	</span>
	                </div>
                </div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.Login.isFetching,
    data: state.Login.data
});

export default connect(mapStateToProps)(LoginPage);

