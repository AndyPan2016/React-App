/**
 * 页面模板
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-09 13:56:49
 */

import React, { Component } from 'react';

import Footer from '../_Commons/Footer';

import './view.less';

class Template extends Component {
    render() {
    	let Content = this.props.content;
        return (
        	<div className="page-wrap">
        		<div className="fn-wrap">
        			<div className="template-content">
        				{
        					Content === undefined ? (null) : (<Content data={this.props.params} />)
        				}
        			</div>
        			<Footer />
        		</div>
        	</div>
        );
    }
}

export default Template;

