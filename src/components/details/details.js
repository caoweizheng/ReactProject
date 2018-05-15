import React from 'react'

import '../../css/details.scss'

class DetailsComponent extends React.Component{

    componentDidMount(){

        let pId = this.props.location.query.proId;
        console.log(pId)
             
             
    }
    render(){
        return (
            <div className="det">
                <div className="header_d">
                    <div><i className="iconfont i3">&#xe635;</i></div>
                    <div className="header_d1">商品详情</div>
                    <div><i className="iconfont">&#xe61a;</i></div>
                </div>

                <div className="main_d">
                    <div className="main_d1">
                        <img src="http://img08.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf5.jpg"/>
                        <p className="p1">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
                        <p className="p2">￥<span>248.00</span><del>酒仙价:269.00</del></p>
                    </div>

                    <div className="main_d2">
                        <p>优惠<span>品质红酒节满399元送嘉年华酒架</span></p>
                        <p>金币<span>赠送124个金币</span></p>
                    </div>

                    <div className="main_d3">
                        <p className="p3">数量
                            <span>
                                <button>-</button>
                                <input type="number" value="1" />
                                <button>+</button>
                            </span>
                        </p>
                        <p className="p4">送至<span>广东省 广州市</span><i className="iconfont">&#xe636;</i></p>
                        <p className="p4 p5">提示<span>此商品不能使用优惠卷</span></p>
                        <p className="p6"><i></i><span>正品保障</span><i></i><span>满100包邮</span><i></i><span>7天退换</span></p>
                    </div>

                    <div><img src="./src/assets/details1.png" /></div>
                </div>

                <div className="footer_d">
                    <ul>
                        <li>
                            <i className="iconfont">&#xe612;</i>
                            <p>侍酒师</p>
                        </li>
                        <li>
                            <i className="iconfont">&#xe690;</i>
                            <p>收藏</p>
                        </li>
                        <li>
                            <i className="iconfont">&#xe64e;</i>
                            <p>购物车</p>
                        </li>
                    </ul>

                    <button className="btn1">加入购物车</button>
                    <button className="btn2">立即购买</button>
                </div>
            </div>
        )
    }
}

export default DetailsComponent;