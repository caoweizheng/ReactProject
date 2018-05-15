import React from 'react'

import '../../css/my.scss'

import http from '../../utils/httpClient.js'

let bg = {
	background:'#eee'
}
let fontsize = {
	fontSize:'0.28rem',
	color:'#000'
}
let color = {
	color:'#000'
}
class NoLoginComponent extends React.Component{

	toLogin(){
		console.log(this.props.nologin.props.router.push({pathname:'login'}))    
	}

	render(){
		return(<div className="myTitle">
					<div>
						<i  className="iconfont usePic">&#xe612;</i>
						<p onClick={this.toLogin.bind(this)}>登录/注册 <i className="iconfont">&#xe636;</i></p>
					</div>
				</div>)
	}
}
class IsLoginComponent extends React.Component{

	state = {
		username:''
	}

	setUserName(name){
		console.log(name)
		     
		this.setState({username:name})
	}

	render(){
		return(<div className="myTitle" style={bg}>
				<div>
					<i style={color} className="iconfont usePic"><img src="https://misc.jiuxian.com/m_user/images/usercenter/userPhoto.png"/></i>
					<p style={fontsize}>{this.state.username}</p>
				</div>
			</div>)
	}
}
class MyComponent extends React.Component{

	state ={
		isLogin:false,
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
			img:'&#xe677;',
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
			img:'&#xe6f8;',
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

	componentDidMount(){

		http.get('loginState').then((res) => {
			console.log('res-----------',res.data.data.phone)
			if(res.data.state){
				this.setState({isLogin:true})
				this.refs.islogin.setUserName(res.data.data.phone)
				     
			}
		})

		let loginState = window.localStorage.getItem('user');
	}

	render(){
		let temp = null;

		if(this.state.isLogin){
			temp = <IsLoginComponent ref="islogin" islogin={this}/>
		}else{
			temp = <NoLoginComponent nologin={this}/>
		}

		return (<div style={bg}>
					
						
					{temp}
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