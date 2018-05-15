import React from 'react'

import '../../css/details.scss'

class DetailsComponent extends React.Component{

    render(){
        return (
            <div className="det">
                <div className="header_d">
                    <div><i className="fa fa-angle-left i3"></i></div>
                    <div className="header_d1">商品详情</div>
                    <div><i className="fa fa-bars"></i></div>
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
                        <p className="p4">送至<span>广东省 广州市</span><i className="fa fa-angle-right"></i></p>
                        <p className="p4 p5">提示<span>此商品不能使用优惠卷</span></p>
                        <p className="p6"><i></i><span>正品保障</span><i></i><span>满100包邮</span><i></i><span>7天退换</span></p>
                    </div>

                    <div><img src="../../img/details1.png" /></div>
                </div>

                <div className="footer_d">
                    <ul>
                        <li>
                            <p><i className="fa fa-user"></i>
                            <span>侍酒师</span></p>
                        </li>
                        <li>
                            <p><i className="fa fa-heart-o"></i>
                            <span>收藏</span></p>
                        </li>
                        <li>
                            <p><i className="fa fa-cart-plus"></i>
                            <span>购物车</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DetailsComponent;