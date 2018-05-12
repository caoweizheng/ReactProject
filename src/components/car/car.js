import React from 'react'

import '../../css/car.scss'

class CarComponent extends React.Component{

	render(){
		return (
            <div className="car_z">
                <div className="header_z">
                    <div><i className="fa fa-angle-left i1"></i></div>
                    <div className="car_zt">购物车</div>
                    <div ><i className="fa fa-bars i2"></i></div>
                </div>
                <div className="main_z">
                    <img src="https://img07.jiuxian.com/bill/2018/0506/9a0c406c6ca3497dac1f05e6b3ab290b.jpg" />
                    <img src="https://img07.jiuxian.com/bill/2018/0506/9a0c406c6ca3497dac1f05e6b3ab290b.jpg" />
                    <img src="https://img07.jiuxian.com/bill/2018/0506/9a0c406c6ca3497dac1f05e6b3ab290b.jpg" />
                    <img src="https://img07.jiuxian.com/bill/2018/0506/9a0c406c6ca3497dac1f05e6b3ab290b.jpg" />
                    <img src="https://img07.jiuxian.com/bill/2018/0506/9a0c406c6ca3497dac1f05e6b3ab290b.jpg" />
                    <img src="https://img07.jiuxian.com/bill/2018/0506/9a0c406c6ca3497dac1f05e6b3ab290b.jpg" />
                </div>
            </div>
        )
	}
}

export default CarComponent;