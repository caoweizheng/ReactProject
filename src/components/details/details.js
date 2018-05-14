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
                        <p>数量<button>-</button><input type="number" value="1" /><button>+</button></p>
                    </div>
                </div>

                <div className="footer_d">
                    
                </div>
            </div>
        )
    }
}

export default DetailsComponent;