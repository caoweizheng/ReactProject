import React from 'react'
import '../../css/pushOrder.scss'

import http from '../../utils/httpClient.js'
let bg = {
	background:'#eee',
	height:'100%'
}

let noMargin = {
	marginTop:'0.533333rem'
}
let pTop = {
	width:'100%',
	position:'fixed',
	left:'0',
	top:'0',
	background:'#e8e8e8'
}

let orderlist = {
	background:'#fff',
	marginBottom:'0.133333rem'
}

let price = {
	color:'red',
	fontSize:'0.24rem',
	fontWeight:600
}


// 地址管理组件
class AddressComponent extends React.Component{

	state = {
		isAdd:false,
		data:[],
		item:{},
		idx:-1,
		username:''
	}

	goSetting(){
		this.props.cAddress()
	}
	selectAdd(idx){
		// console.log('data======================',this.state.data[idx])
		this.props.inputAdd(this.state.data[idx])
		this.props.cAddress()

	}
	componentDidMount(){

		http.get('loginState').then((res) => {
			if(res.data.state){
                let username = res.data.data.phone;
                this.setState({username:username})
                console.log(username)
                     
				http.post('getUser',{
					phone:username
				}).then((res) => {

					if(res.data.data[0].address.length>0){
						res.data.data[0].address.map((item) => {
												     
							this.state.data.push(JSON.parse(item))
						})

						     
						this.setState({data:this.state.data})
					}     
					     
				})
            }
		})

		     
	}

	addAddress(){
		this.props.add.props.router.push({pathname:'setting'})
	}

	render(){

		return(<div className="addressWall">
				<div className="addressTitle">
					<i className="iconfont" onClick={this.goSetting.bind(this)} >&#xe635;</i>
					<p>选择收获地址</p>
				</div>
				<div className="addressCon">

					{	
						this.state.data.map((item,idx) => {
							return (<div key={idx} onClick={this.selectAdd.bind(this,idx)}>
										<div>
											<p><span>{item.consignee}</span><span>{item.contact}</span></p>
											<p>{item.local}</p>
										</div>
										<i className="iconfont">&#xe625;</i>
									</div>)
						})
					}
					
				</div>
				<div className="addressBottom">
					<span className="addAddress" onClick={this.addAddress.bind(this,-1)}>添加新地址</span>
				</div>
			</div>)
	}
}
class PushOrderComponent extends React.Component{

	state = {
		type:0,
		orders:[],
		totalPrice:0,
		address:[],
		isAdd:false,
		username:'',
		addItem:{
			consignee:'',
			contact:'',
			local:''
		},
		isAddOrder:true
		


	}

	goMy(){
		this.props.router.push({pathname:'my'})
	}

	inputAddress(item){
		this.setState({
			addItem:{
				consignee:item.consignee,
				contact:item.contact,
				local:item.local
			}
		})
		     
	}	

	componentDidMount(){

		if(this.props.params.orderid == undefined) {

	        http.get('loginState').then((res) => {
	            if(res.data.state){
	                let username = res.data.data.phone;

	                http.post('getCar',{username:username}).then((res) => {
	                    console.log('car',res)

	                    this.setState({orders:res.data.data,username:username})

	                    this.state.orders.map((item) => {
	                    	console.log(666)
	                    	     
	                    	
	                        this.state.totalPrice += item.qty * item.actPrice
	                            
	                    })
	                    this.setState({})
	                })

					http.post('getUser',{
						phone:username
					}).then((res) => {
						if(res.data.data[0].address.length>0){
							let item = JSON.parse(res.data.data[0].address[0]);
							this.setState({addItem:{
								consignee:item.consignee,
								contact:item.contact,
								local:item.local
							}})
							     
						}     
						     
					})
	            }
	        })
		}else{
			// this.props.params.orderid
			this.state.isAddOrder = false;
			let orderID = this.props.params.orderid;
	        http.get('loginState').then((res) => {
	            if(res.data.state){
	                let username = res.data.data.phone;
	                this.setState({username:username})

					http.post('getUser',{
						phone:username
					}).then((res) => {
						console.log(res.data.data[0].order)
	  
						res.data.data[0].order[orderID].data.map((item) => {	
							console.log('item',item)
							     
						    this.state.totalPrice += item.actPrice * item.qty;
							this.state.orders.push(item)   
							console.log(666)
							         
						})
							this.setState({})		 
						     
					})
					http.post('getUser',{
						phone:username
					}).then((res) => {
						if(res.data.data[0].address.length>0){
							let item = JSON.parse(res.data.data[0].address[0]);
							this.setState({addItem:{
								consignee:item.consignee,
								contact:item.contact,
								local:item.local
							}})
							     
						}     
						     
					})
	            }
	        })    
		}
		     

	}

	toDetails(pid){
		this.props.router.push({pathname:'details',query:{proId:pid}})

	}
	toCar(){
		this.props.router.push({pathname:'car'})
	}

	hideAddress(){
		this.setState({isAdd:false})
	}

	selectAdd(){
		this.setState({isAdd:true})
	}

	// 提交订单(生成订单)   
	toPay(){
		let orderID = Date.now();
		let update = {
			type:'order',
			orderType:1,
			orderID : orderID
		}
		if(this.state.isAddOrder){
			console.log(JSON.stringify(this.state.orders),'==================')

			http.post('updateUser',{
				phone:this.state.username,
				update:JSON.stringify(update),
				order:JSON.stringify(this.state.orders)
			}).then((res) => {

				this.state.orders.map((item) => {	

					// 删除购物车
					http.post('delCar',{username:this.state.username,proId:item._id}).then((res)=>{
						this.props.router.push({pathname:'pay/'+update.orderID})
					})						     
				})
				 
			})
			
		}else{
			this.props.router.push({pathname:'pay/'+this.props.params.orderid})
		}

	}
	
	render(){
		let address = null;

		if(this.state.isAdd){
			address = <AddressComponent inputAdd={this.inputAddress.bind(this)} add={this} cAddress={this.hideAddress.bind(this)} />
		}
		return(<div style={bg}>
				<div className="porderTitle" style={pTop}>
					<i className="iconfont" onClick={this.toCar.bind(this)} >&#xe635;</i>
					<p>填写订单</p>
				</div>
				<div className="orderCon"style={noMargin} onClick={this.selectAdd.bind(this)}>
				<p><span>收货人:{this.state.addItem.consignee}</span><span>{this.state.addItem.contact}</span><span><i className="iconfont">&#xe636;</i></span></p>
				<p>{this.state.addItem.local}</p>
				</div>
				<div className="porderList">
				<ul>

					{
						this.state.orders.map((item) => {
							
							return (<li key={item._id} style={orderlist}>
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
			<div className="orderBottom">
				<p>应付金额: <span style={price}>￥ {this.state.totalPrice}.00</span></p>
				<p onClick={this.toPay.bind(this)}>提交订单</p>
			</div>
			{address}
		</div>)
	}
}
export default PushOrderComponent;