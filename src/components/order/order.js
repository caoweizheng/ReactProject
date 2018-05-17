import React from 'react'
import '../../css/order.scss'

let bg = {
	background:'#e9e9ea61',
	height:'100%'
}
class OrderComponent extends React.Component{

	state = {
		type:0
	}

	goMy(){
		this.props.router.push({pathname:'my'})
	}

	
	
	render(){

		return(<div style={bg}>
			<div className="orderTitle">
				<i className="iconfont" onClick={this.goMy.bind(this)} >&#xe635;</i>
				<p>商品订单</p>
			</div>

			<div className="orderNav">
				<ul>
					<li><span>全部</span></li>
					<li><span>待付款</span></li>
					<li><span>待发货</span></li>
					<li><span>待收货</span></li>
				</ul>
			</div>

			<div className="orderList">
				<ul>
					<li>
						<div>
							<img src="https://img07.jiuxian.com/2016/0718/bf1d1c9acb2541bcadb871e667fe97af4.jpg"/>
							<p>法国红酒法国思慕干红葡萄酒750ml</p>
						</div>
						<div>
							<span>￥ 299.00</span>
							<span>x 12</span>
						</div>
					</li>
				</ul>
			</div>
		</div>)
	}
}
export default OrderComponent;