/**
 * 表单元素
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-15 11:00:06
 */

import React from 'react';

import '../../../less/commons.less';

class FormInput extends React.Component {
	constructor(props) {
		super(props);
		this.init();
	}
	init() {
		let props = this.props;
		this.state = {
			type: props.type || 'text',
			value: props.value || '',
			disabled: props.disabled,
			tipText: props.tipText || '',
			titleText: props.titleText || '',
			placeholder: props.placeholder || '',
			forward: props.forward,
			onChange: props.onChange,
			onClick: props.onClick,
			qrCode: props.qrCode
		}
	}
	render() {
		let state = this.state;
		return (
			<div className={"form-item-rows form-input " + state.type}>
				<label className="form-item-lab">{state.tipText || state.titleText}</label>
				{
					state.type === 'title' ? (null) : (
						state.type === 'date' ? (
							<span className="form-item-inp">
								<input type={state.type} className="form-inp" placeholder={state.placeholder} value={state.value} onChange={this.changeEvent.bind(this)} />
							</span>
							) : (
							(state.forward || state.qrCode) ? (
								(state.qrCode ? (
									<a href="javascript:;" className="form-item-inp form-item-jump" onClick={this.clickEvent.bind(this)}>
										<span className="form-inp qr-code"></span>
										<span className="mask"></span>
									</a>
								) : (
									<a href="javascript:;" className="form-item-inp form-item-jump" onClick={this.clickEvent.bind(this)}>
										<input type={state.type} className="form-inp" placeholder={state.placeholder} value={state.value} onChange={this.changeEvent.bind(this)} />
										<span className="mask"></span>
									</a>
								))
							) : (
								state.type === 'textarea' ? (
										<span className="form-item-inp">
											<textarea className="form-inp form-textarea" placeholder={state.placeholder} value={state.value} onChange={this.changeEvent.bind(this)}></textarea>
										</span>
									) : (
									<span className="form-item-inp">
										<input type={state.type} className="form-inp" disabled={state.disabled} placeholder={state.placeholder} value={state.value} onChange={this.changeEvent.bind(this)} />
									</span>
								)
							)
						)
					)
				}
			</div>
		)
	}
	changeEvent(e) {
		let value = e.target.value;
		this.setState({
			value: value
		});
		let onChange = this.state.onChange;
		if(onChange){
			onChange(e, value);
		}
	}
	clickEvent(e){
		let onClick = this.state.onClick;
		if(onClick){
			onClick(e);
		}
	}
}

export default FormInput;
