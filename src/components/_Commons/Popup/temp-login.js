/**
 * popup template login
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-02 14:08:42
 */

import React from 'react';

class TempLogin extends React.Component {
	render() {
		return (
			<div className="popup-main-login">
				<div className="regist-wrap">
					<div className="form-item-row">
						<label className="form-item-lab">用户名：</label>
						<span className="form-item-inp-wrap">
							<input type="text" className="form-item-inp" v-model="user.name" />
						</span>
					</div>
					<div className="form-item-row">
						<label className="form-item-lab">密码：</label>
						<span className="form-item-inp-wrap">
							<input type="password" className="form-item-inp" v-model="user.pwd1" />
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default TempLogin;
