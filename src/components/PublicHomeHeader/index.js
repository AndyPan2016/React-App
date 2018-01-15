/**
 * 公众家园头部
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-11 10:37:11
 */

import React, { Component } from 'react';

import './view.less';

class PublicHomeHeader extends Component {
    //构造器
    constructor (props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
        	//搜索框focus状态
        	searchBoxFocus: false,
        	//搜索框value
        	searchBoxValue: '',
        	//按记住
        	rememberState: true,
        	//按上香
        	incenseState: false,
        	//按祈福
        	cliffordState: false
        };
    }
	render() {
		return (
			<div className="public-home-header">
				<div className={"header-searchbox"+(this.state.searchBoxFocus ? ' focus' : '')}>
					<div className="searchbox-wrap">
						<i className="icon-search"></i>
						<div className="search-inp-wrap">
							<input type="text" className="search-inp" placeholder="请输入搜索关键字" 
								value={this.state.searchBoxValue} 
								onChange={this.inpChange.bind(this)} 
								onFocus={this.inpFocus.bind(this)} 
								onBlur={this.inpBlur.bind(this)} />
						</div>
					</div>
				</div>
				<div className="header-sort" onClick={this.sortSwitch.bind(this)}>
					<a href="javascript:;" data-state="remember" className={"sort-item" + (this.state.rememberState ? ' active' : '')}>
						按记住
						<i className="active-line"></i>
					</a>
					<a href="javascript:;" data-state="incense" className={"sort-item" + (this.state.incenseState ? ' active' : '')}>
						按上香
						<i className="active-line"></i>
					</a>
					<a href="javascript:;" data-state="clifford" className={"sort-item" + (this.state.cliffordState ? ' active' : '')}>
						按祈福
						<i className="active-line"></i>
					</a>
				</div>
			</div>
		);
	}
	inpFocus() {
		this.setState({searchBoxFocus: true});
	}
	inpBlur() {
		if(!this.state.searchBoxValue){
			this.setState({searchBoxFocus: false});
		}
	}
	inpChange(e) {
		this.setState({searchBoxValue: e.target.value});
	}
	sortSwitch(e){
		let dataState = e.target.getAttribute('data-state');
		let onSortSwitch = this.props.onSortSwitch;
		if(dataState){
			if(onSortSwitch){
				onSortSwitch(dataState);
			}
			if(dataState === 'remember'){
				this.setState({
		        	rememberState: true,
		        	incenseState: false,
		        	cliffordState: false
				});
			}
			else if(dataState === 'incense'){
				this.setState({
		        	rememberState: false,
		        	incenseState: true,
		        	cliffordState: false
				});
			}
			else if(dataState === 'clifford'){
				this.setState({
		        	rememberState: false,
		        	incenseState: false,
		        	cliffordState: true
				});
			}
		}
	}
}

export default PublicHomeHeader;