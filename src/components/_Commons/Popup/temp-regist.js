/**
 * popup template regist
 * @authors AndyPan (pye-mail@163.com)
 * @date    2017-12-25 14:21:07
 */

import React from 'react';

class TempRegist extends React.Component {
	render() {
		return (
			<div className="popup-main-regist">
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
					<div className="form-item-row">
						<label className="form-item-lab">确认密码：</label>
						<span className="form-item-inp-wrap">
							<input type="password" className="form-item-inp" v-model="user.pwd2" />
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default TempRegist;
