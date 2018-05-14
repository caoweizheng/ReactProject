import React from 'react'

import '../../css/my.scss'

let bg = {
	background:'#eee'
}

class MyComponent extends React.Component{

	state ={
		order:[
		{
			img:'&#xe60a;',
			txt:'待付款'
		},{
			img:'&#xe649;',
			txt:'待发货	'
		},{
			img:'&#xe60b;',
			txt:'待收货	'
		},{
			img:'&#xe60c;',
			txt:'待评价	'
		}],
		money:[{
			img:'0.00',
			txt:'账户余额'
		},{
			img:'0.00',
			txt:'返现'
		},{
			img:'0',
			txt:'优惠券'
		},{
			img:'0',
			txt:'金币'
		}],
		myWall:[{
			img:'&#xe609;',
			txt:'商品收藏',
			color:{
				color:'red'
			}
		},{
			img:'&#xe70f;',
			txt:'足迹',
			color:{
				color:'blue'
			}
		},{
			img:'&#xe632;',
			txt:'会员频道',
			color:{
				color:'green'
			}
		},{
			img:'&#xe608;',
			txt:'商品兑换',
			color:{
				color:'red'
			}
		},{
			img:'&#xe625;',
			txt:'意见反馈',
			color:{
				color:'blue'
			}
		},{
			img:'&#xe60e;',
			txt:'客服热线',
			color:{
				color:'red'
			}
		},{
			img:'&#xe617;',
			txt:'招商入驻',
			color:{
				color:'orange'
			}
		},{
			img:'&#xe61e;',
			txt:'酒快到',
			color:{
				color:'red'
			}
		}]
	}

	render(){
		return (<div style={bg}>
					<div className="myTitle">
						
						<div>
							<i className="iconfont usePic">&#xe612;</i>
							<p>登录/注册 <i className="iconfont">&#xe636;</i></p>
						</div>
					</div>
					<div className="myOrder">
						<p><span>我的订单</span><span>查看全部订单 <i className="iconfont">&#xe636;</i></span></p>
						<ul>
							{
								this.state.order.map((item,idx) => {
									return (<li key={idx}>
											<i className="iconfont" dangerouslySetInnerHTML ={{__html:item.img}}></i>
											<span>{item.txt}</span>
										</li>)
								})
							}
						</ul>
					</div>

					<div className="myMoney">
						<p><span>我的钱包</span><span>查看全部订单 <i className="iconfont">&#xe636;</i></span></p>
						<ul>
							{
								this.state.money.map((item,idx) => {
									return (<li key={idx}>
											<i>{item.img}</i>
											<span>{item.txt}</span>
										</li>)
								})
							}
						</ul>
					</div>

					<div className="myWall">
						<ul>
							{
								this.state.myWall.map((item,idx) => {
									return (<li key={idx}>
											<i style={item.color} className="iconfont" dangerouslySetInnerHTML ={{__html:item.img}}></i>
											<span>{item.txt}</span>
										</li>)
								})
							}
						</ul>
					</div>
			</div>)
	}
}

export default MyComponent;