import React from 'react'
import '../../css/pay.scss'
import http from '../../utils/httpClient.js'
let pTop = {
	width:'100%',
	background:'#e8e8e8'
}

class PayComponent extends React.Component{

	state = {
		orderID:'',
		orderId:[],
		username:'',
		totalPrice:0
	}

	toOreder(){

		this.props.router.push({pathname:'pushOrder/'+this.state.orderID})
	}

	componentDidMount(){
		let orderID = this.props.params.orderid
		this.setState({orderID:orderID})
		     
        http.get('loginState').then((res) => {
            if(res.data.state){
                let username = res.data.data.phone;
                this.setState({username:username})

				http.post('getUser',{
					phone:username
				}).then((res) => {
					console.log(res.data.data[0].order)
  
					if(res.data.data[0].order[orderID] != undefined){
						res.data.data[0].order[orderID].data.map((item) => {	
						    this.state.totalPrice += item.actPrice * item.qty;
							this.state.orderId.push(item._id)   
							console.log(666)
							         
						})
						this.setState({})
					}     
					     
				})
            }
        })
	}

	pay(){
		let update = {
			type:'order',
			orderType:2,
			orderID:this.state.orderID
		}
		console.log(this.state.username)
		console.log(this.state.orderID)
		     
		http.post('updateUser',{
			phone:this.state.username,
			update:JSON.stringify(update),
			order:JSON.stringify(this.state.orderId)
		}).then((res) => {
			if(res.data.state){
				alert("支付成功!")
				this.props.router.push({pathname:'order'})
			}
			     
		})

	}

	render(){
		return(<div>
			<div className="porderTitle" style={pTop}>
					<i className="iconfont" onClick={this.toOreder.bind(this)} >&#xe635;</i>
					<p>支付中心</p>
				</div>
				<p className="total"><span>应付:</span><span>￥ {this.state.totalPrice}</span></p>
				<span className="pay" onClick={this.pay.bind(this)}>支付</span>
			</div>)
	}
}

export default PayComponent;