/**
 * Footer
 * @authors AndyPan (pye-mail@163.com)
 * @date    2017-12-26 10:33:11
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import './view.less';

class Footer extends React.Component {
	render() {
		return (
			<div className="page-footer-wrap">
				{/*<NavLink className="footer-nav-item" to="/test">测试</NavLink>*/}
				<NavLink className="footer-nav-item nav-remember" to="/remember">
					<i className="item-icon"></i>
					<label className="item-lab">记住</label>
				</NavLink>
				<NavLink className="footer-nav-item nav-public-home" to="/publichome">
					<i className="item-icon"></i>
					<label className="item-lab">公众家园</label>
				</NavLink>
				<NavLink className="footer-nav-item nav-heaven-express" to="/heavenexpress">
					<i className="item-icon"></i>
					<label className="item-lab">天国快递</label>
				</NavLink>
				<NavLink className="footer-nav-item nav-my" to="/my">
					<i className="item-icon"></i>
					<label className="item-lab">个人中心</label>
				</NavLink>
			</div>
		)
	}
}

export default Footer;