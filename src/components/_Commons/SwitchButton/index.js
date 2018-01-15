/**
 * Switch 开关
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-12 16:25:40
 */
import React from 'react';

import './view.less';

class SwitchButton extends React.Component {
	constructor(props) {
		super(props);
		this.init();
	}
	init() {
		let props = this.props;
		this.state = {
			checked: props.checked || false,
			onSwitch: props.onSwitch
		}
	}
	render() {
		return (
			<input className="mui-switch mui-switch-animbg" type="checkbox" checked={this.state.checked} onChange={this.Switch.bind(this)} />
		)
	}
	Switch() {
		this.setState({
			checked: !this.state.checked
		});
		let onSwitch = this.state.onSwitch;
		if(onSwitch){
			onSwitch(!this.state.checked);
		}
	}
}

export default SwitchButton;


