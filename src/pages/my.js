/**
 * 我的 页面
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-09 14:57:37
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/my';
import DefaultTemplate from '../components/PageTemplate/defaults';


class MyContent extends Component {
    //构造器
    constructor (props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
        };
    }
	render() {
        let data = this.props.data;
		return (
			<div className="page-index">
                (我的)
                {
                    data ? (data.map((item, idx)=>(
                            <span key={idx}>{item.item1}{item.item2}</span>
                        )
                    )) : (null)
                }
			</div>
		);
	}
}

class My extends Component {
	componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getDatas());
    }
    render() {
        return (
        	<DefaultTemplate content={MyContent} params={this.props.isFetching ? null : this.props.data} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.My.isFetching,
    data: state.My.data
});

export default connect(mapStateToProps)(My);
