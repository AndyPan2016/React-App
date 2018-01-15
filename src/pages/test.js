/**
 * 测试页
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-09 15:17:12
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../action/test';
import Popup from '../components/_Commons/Popup';
import RememberSwiper from '../components/Swipers/remember-swiper'
import DefaultTemplate from '../components/PageTemplate/defaults';


class TestContent extends Component {
    //构造器
    constructor (props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
            popupState: false
        };
    }
	render() {
        let data = this.props.data;
		return (
			<div className="page-index">
                (测试)
                {
                    data ? (data.map((item, idx)=>(
                            <span key={idx}>{item.item1}{item.item2}</span>
                        )
                    )) : (null)
                }
                
                <RememberSwiper />
                <a href="javascript:;" onClick={this.openPopup.bind(this)}>弹窗模型</a>
                {
                    this.state.popupState ? (<Popup show={true} type="downup" title="自定义标题" text="自定义内容" onClosed={this.closePopup.bind(this)} />) : (null)
                }
			</div>
		);
	}
    openPopup() {
        this.setState({popupState: true});
    }
    closePopup() {
        this.setState({popupState: false});
    }
}

class Test extends Component {
	componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getDatas());
    }
    render() {
        return (
        	<DefaultTemplate content={TestContent} params={this.props.isFetching ? null : this.props.data} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.Test.isFetching,
    data: state.Test.data
});

export default connect(mapStateToProps)(Test);
