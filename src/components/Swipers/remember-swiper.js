/**
 * Swiper
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-09 14:09:16
 */


import React, { Component } from 'react';
import Slider from 'react-slick';

import '../../less/slick/slick.min.less';
import '../../less/slick/slick-theme.min.less';
import './view.less';

class RememberSwiper extends Component {
    //构造器
    constructor (props) {
        super(props);
    }
	render() {
		let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };

        let dataList = this.props.data;
        
		return (
            <Slider {...settings}>
                {
                    dataList ? (
                        dataList.map((item, idx) => (
                            <a href="javascript:;" className="slide-item" key={idx}>
                                <img src={item.img} className="thumb" />
                            </a>
                        ))
                    ) : (null)
                }
            </Slider>
		)
	}
}

export default RememberSwiper