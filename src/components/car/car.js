import React from 'react'

import '../../css/car.scss'
import $ from 'jquery'

class CarComponent extends React.Component{

    state = {
        data: {
            car1:[]
        }
    }

    change = (e) => {
        this.setState({text: e.target.value})
    }

    // $(document).ready(function(){
    //     $(".add").click(function(){
    //         $({this.state.text}) + 1;
    //     })
    // })

	render(){
		return (
            <div className="car_z">

                <div className="header_z">
                    <div><i className="iconfont i1">&#xe635;</i></div>
                    <div className="car_zt">购物车</div>
                    <div ><i className="iconfont i2">&#xe61a;</i></div>
                </div>

                <div className="main_z">
                    <ul>
                        <li>
                            <img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg" />
                            <h4>【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</h4>
                            <p><span>￥248.00</span></p>
                            <p>
                                <button className="sub">-</button>
                                <input type="number" value={this.state.text} onChange={this.change} />
                                <button className="add">+</button>
                                <span className="del">删除</span>
                            </p>
                        </li>
                        <li>
                            <img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg" />
                            <h4>【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</h4>
                            <p><span>￥248.00</span></p>
                            <p>
                                <button>-</button>
                                <input type="number" value={this.state.text} onChange={this.change} />
                                <button>+</button>
                                <span className="del">删除</span>
                            </p>
                        </li>
                        <li>
                            <img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg" />
                            <h4>【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</h4>
                            <p><span>￥248.00</span></p>
                            <p>
                                <button>-</button>
                                <input type="number" value={this.state.text} onChange={this.change} />
                                <button>+</button>
                                <span className="del">删除</span>
                            </p>
                        </li>
                        <li>
                            <img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg" />
                            <h4>【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</h4>
                            <p><span>￥248.00</span></p>
                            <p>
                                <button>-</button>
                                <input type="number" value={this.state.text} onChange={this.change} />
                                <button>+</button>
                                <span className="del">删除</span>
                            </p>
                        </li>
                        <li>
                            <img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg" />
                            <h4>【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</h4>
                            <p><span>￥248.00</span></p>
                            <p>
                                <button>-</button>
                                <input type="number" value={this.state.text} onChange={this.change} />
                                <button>+</button>
                                <span className="del">删除</span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="footer_z">
                    <p>
                        合计：<span>￥457.00</span>
                        <button>去结算</button>
                    </p>
                </div>
            </div>
        )
	}
}

export default CarComponent;