import React from 'react'
import '../../css/order.scss'
import $ from 'jquery'

import http from '../../utils/httpClient.js'
let bg = {
	background:'#eee',
	height:'100%',
	display:'flex',
	flexDirection:'column',
	paddingTop:'1.2rem'
}
class OrderComponent extends React.Component{

	state = {
		type:0,
		showOrder:[],
		allOrder:[],
		waitPayment:[],
		payment:[],
		username:''

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

	delOrder(orderID){
		
		let update = {
			type:'order',
			orderType:3,
			orderID : orderID
		}

		http.post('updateUser',{
				phone:this.state.username,
				update:JSON.stringify(update),
				order:null
			}).then((res) => {
				this.setState({
					showOrder:[],
					allOrder:[],
					waitPayment:[],
					payment:[]



				})
				if(res.data.state){
					http.post('getUser',{
						phone:this.state.username
					}).then((res) => {
						// console.log(res.data.data[0].order)
						let orderData = res.data.data[0].order;
	     
	  					for(let key in orderData){
	  						this.state.allOrder.push({key:key,orderType:orderData[key].orderType,data:orderData[key].data})
	  						console.log('all',orderData[key])
	  						     
	  						if(orderData[key].orderType == 1){

	  							this.state.waitPayment.push({key:key,orderType:orderData[key].orderType,data:orderData[key].data});
	  						}else if(orderData[key].orderType == 2){
	  							this.state.payment.push({key:key,orderType:orderData[key].orderType,data:orderData[key].data});
	  						}     
	  					}
	    
						this.setState({showOrder:this.state.allOrder})
						     
					})
				}
			})
		     
	}

	componentDidMount(){

		http.get('loginState').then((res) => {

            if(res.data.state){
            	let username = res.data.data.phone;
            	this.setState({username:username})

				http.post('getUser',{
					phone:username
				}).then((res) => {
					// console.log(res.data.data[0].order)
					let orderData = res.data.data[0].order;
     
  					for(let key in orderData){
  						this.state.allOrder.push({key:key,orderType:orderData[key].orderType,data:orderData[key].data})
  						console.log('all',orderData[key])
  						     
  						if(orderData[key].orderType == 1){

  							this.state.waitPayment.push({key:key,orderType:orderData[key].orderType,data:orderData[key].data});
  						}else if(orderData[key].orderType == 2){
  							this.state.payment.push({key:key,orderType:orderData[key].orderType,data:orderData[key].data});
  						}     
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
	toPushOrder(item){
		if(item.orderType == 1){
			this.props.router.push({pathname:'pushOrder/'+item.key})

		}else{
			this.props.router.push({pathname:'wuliu/'+item.key})

		}
		     
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
							     
							return(<li key={idx} >
								<h3>订单号:{item.key} <span>{item.orderType == 1 ? '待付款' : '待发货'}</span></h3>
										{
											item.data.map((val) => {
												return(
													<div key={val._id} className="orderdata" onClick={this.toPushOrder.bind(this,item)}>
														<div>
															<img src={val.imgPath}/>
															<p>{val.proName}</p>
														</div>
														<div>
															<span>￥ {val.actPrice}</span>
															<span>x {val.qty}</span>
														</div>
													</div>
													)
												     
											})
										}
										<span className="delOrder" onClick={this.delOrder.bind(this,item.key)}>取消订单</span>	
									</li>)
						})
					}
				</ul>
			</div>
		</div>)
	}
}
export default OrderComponent;