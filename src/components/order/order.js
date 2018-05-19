import React from 'react'
import '../../css/order.scss'
import $ from 'jquery'

import http from '../../utils/httpClient.js'
let bg = {
	background:'#e9e9ea61',
	height:'100%',
	display:'flex',
	flexDirection:'column',
	paddingTop:'90px'
}
class OrderComponent extends React.Component{

	state = {
		type:0,
		showOrder:[],
		allOrder:[],
		waitPayment:[],
		payment:[]

	}

	goMy(){
		this.props.router.push({pathname:'my'})
	}

	showallOrder(){
		this.setState({showOrder:this.state.allOrder})
	}
	showWaitPayment(){

		this.setState({showOrder:this.state.waitPayment})

	}
	showPayment(){
		this.setState({showOrder:this.state.payment})
	}

	componentDidMount(){

		http.get('loginState').then((res) => {

            if(res.data.state){
            	let username = res.data.data.phone;

				http.post('getUser',{
					phone:username
				}).then((res) => {
					console.log(res.data.data[0].order)
  
					if(res.data.data[0].order.length>0){
						res.data.data[0].order.map((item) => {	
							this.state.allOrder.push(item)
						    if(item.orderType == 1){
						    	this.state.waitPayment.push(item)
						    }else if(item.orderType == 2){
						    	this.state.payment.push(item)
						    }    
						})

					}     
					this.setState({showOrder:this.state.allOrder})
					     
				})
        	}
    	})

   		$('.orderNav li').eq(0).css({color:'red'})
		$('.orderNav li').click(function(){
			if($(this).attr('id') == 'classify')return;
			$(this).css({color:'red'}).siblings('li').css({color:'#000'})
			     
		})
	}
	toPushOrder(orderId){
		this.props.router.push({pathname:'pushOrder/'+orderId})
		     
	}

	render(){

		return(<div style={bg}>
			<div className="orderTitle">
				<i className="iconfont" onClick={this.goMy.bind(this)} >&#xe635;</i>
				<p>商品订单</p>
			</div>

			<div className="orderNav">
				<ul>
					<li onClick={this.showallOrder.bind(this)}><span>全部</span></li>
					<li onClick={this.showWaitPayment.bind(this)}><span>待付款</span></li>
					<li onClick={this.showPayment.bind(this)}><span>待发货</span></li>
					<li id="classify"><span>待收货</span></li>
				</ul>
			</div>

			<div className="orderList">
				<ul>
					{
						this.state.showOrder.map((item,idx) => {
							console.log(item)
							     
							return(<li key={idx} onClick={this.toPushOrder.bind(this,item.orderID)}>
										<div>
											<img src={item.imgPath}/>
											<p>{item.proName}</p>
										</div>
										<div>
											<span>￥ {item.actPrice}</span>
											<span>x {item.qty}</span>
										</div>
									</li>)
						})
					}
				</ul>
			</div>
		</div>)
	}
}
export default OrderComponent;