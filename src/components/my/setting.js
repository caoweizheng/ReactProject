import React from 'react'
import '../../css/setting.scss'

import http from '../../utils/httpClient.js'


let bg = {
	background:'#eee'
}
let nickBg = {
	background:'#eee',
	height:'100%'
}

// 修改昵称组件
class NickNameComponent extends React.Component{

	state = {
		nick:''
	}
	// 完成修改昵称
	finishNick(){
		  
		this.props.cNick(this.state.nick)
	}
	// 输入昵称
	change(e){
	
		this.setState({nick:e.target.value})
	}

	render(){
		return(<div className="nickWall" style={nickBg}>
			<div className="nickTitle">
				<i className="iconfont" onClick={this.finishNick.bind(this)} >&#xe635;</i>
				<span>修改昵称</span>
				<span onClick={this.finishNick.bind(this)}>完成</span>
			</div>
			<div className="nickIn">
				<input placeholder="还没有填写昵称" value={this.state.nick} onChange={this.change.bind(this)}/>
			</div>
		</div>)
	}
}

// 选择性别组件
class GenderComponent extends React.Component{

	// 隐藏或选择性别
	hideGender(e){
		let gender = null;
		if(e.target.tagName == "P"){
			if(e.target.innerText == '取消'){
				let gender = null;
			}else{
				gender = e.target.innerText;
			}
		}
		// 调用父组件的方法
		this.props.cGender(gender)

	}

	render(){
		return(	<div className="myGender" onClick={this.hideGender.bind(this)}>
				<div>
					<p>男</p>
					<p>女</p>
					<p>保密</p>
					<p>取消</p>
				</div>
			</div>)
	}
}

class Address extends React.Component{

	state ={
		title:'新增收货地址',
		data:[],
		consignee:'',
		contact:'',
		local:'',
		idx:-1


	}

	componentDidMount(){
		console.log('idx--------------',this.props.idx)
		      
		if(JSON.stringify(this.props.add) != '{}'){
		console.log('=====++++++-------------++++++++++=========',this.props.add)
		 // this.setState({data:this.props.add,title:'编辑收货地址'})
			this.setState({
				consignee:this.props.add.consignee,
				contact:this.props.add.contact,
				local:this.props.add.local,
				title:'编辑收货地址',
				idx:this.props.idx
			})
		}else{
			this.setState({
				consignee:'',
				contact:'',
				local:'',
				title:'新增收货地址',
				idx:-1
			})
		}

		     
	}

	goAddress(){
		this.props.hideAdd()
	}

	addToAddress(){

		let address = {
			consignee:this.state.consignee,
			contact:this.state.contact,
			local:this.state.local
		}

		http.get('loginState').then((res) => {

			if(res.data.state){
				let username = res.data.data.phone;

				http.post('getUser',{
					phone:username
				}).then((res) => {
					if(res.data.state){
						console.log(this.state.idx+'address================',res)
						if(this.state.idx > -1){

							let addStr = JSON.stringify(address)

							let update ={
									type:'address',
									idx:this.state.idx
								}

							http.post('updateUser',{
								phone:username,
								address:addStr,
								update:JSON.stringify(update)

							}).then((res) => {
								if(res.data.state){
									console.log(res)
									console.log('添加成功')
									this.props.hideAdd()
									     
									     
								}
							})			
						}else{

							let addStr = JSON.stringify(address)
							http.post('updateUser',{
								phone:username,
								address:addStr

							}).then((res) => {
								if(res.data.state){
									console.log(res)
									console.log('添加成功')
									this.props.hideAdd()
									     
									     
								}
							})
						}

					}else{
						// error
					}
				})

			
			}else{
				// 没有用户
			}

			     
		})
	}
	changeConsignee(event){
		this.setState({consignee:event.target.value})
	}
	changeConcat(event){
		this.setState({contact:event.target.value})
	}
	changeLocal(event){
		this.setState({local:event.target.value})
	}
	render(){
		return (<div className="addAddressWall">
					<div className="addressTitle">
						<i className="iconfont" onClick={this.goAddress.bind(this)} >&#xe635;</i>
						<p>{this.state.title}</p>
					</div>

					<div className="addDetails">
						<p>
							<span>收货人</span>
							<input value={this.state.consignee} onChange={this.changeConsignee.bind(this)}/>
						</p>
						<p>
							<span>联系方式</span>
							<input value={this.state.contact} onChange={this.changeConcat.bind(this)}/>
						</p>
						<p>
							<span>详细地址</span>
							<input value={this.state.local} onChange={this.changeLocal.bind(this)}/>
						</p>
						<i onClick={this.addToAddress.bind(this)}>保存</i>
					</div>
			</div>)
	}
}

// 地址管理组件
class AddressComponent extends React.Component{

	state = {
		isAdd:false,
		data:[],
		item:{},
		idx:-1
	}

	goSetting(){
		this.props.cAddress()
	}

	addAddress(idx){
		console.log('data======================',this.state.data[idx])

		// data = {
		// 	consignee:'曹伟正',
		// 	contact:'13427431482',
		// 	local:'广州天河'
		// }
		// this.setState({data:data})
		if(idx != -1){
			this.setState({item:this.state.data[idx],isAdd:true,idx:idx})
		}else{
			this.setState({isAdd:true})
		}   
	}

	hideAdd(){
		this.setState({isAdd:false,item:{},data:[]})

		http.post('getUser',{
			phone:this.props.addCom
		}).then((res) => {
			console.log('============================')
			if(res.data.data[0].address.length>0){
				res.data.data[0].address.map((item) => {
					console.log('============================',item)
					     
					this.state.data.push(JSON.parse(item))
				})
				console.log(this.state.data,"==================")
				     
				this.setState({data:this.state.data})
			}     
			     
		})
	}

	componentDidMount(){

		http.post('getUser',{
			phone:this.props.addCom
		}).then((res) => {
			console.log('============================')


			if(res.data.data[0].address.length>0){
				res.data.data[0].address.map((item) => {
					console.log('============================',item)
					     
					this.state.data.push(JSON.parse(item))
				})
				console.log(this.state.data,"==================")
				     
				this.setState({data:this.state.data})
			}     
			     
		})
		     
	}

	render(){
		let address = null;
		if(this.state.isAdd){
			address = <Address idx={this.state.idx} add={this.state.item} hideAdd={this.hideAdd.bind(this)}/>
		}
		return(<div className="addressWall">
				<div className="addressTitle">
					<i className="iconfont" onClick={this.goSetting.bind(this)} >&#xe635;</i>
					<p>地址管理</p>
				</div>
				<div className="addressCon">

					{	
						this.state.data.map((item,idx) => {
							return (<div key={idx} onClick={this.addAddress.bind(this,idx)}>
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
				{address}
			</div>)
	}
}

class ExitComponent extends React.Component{

	hideExit(){
		this.props.showExit()
	}

	Exit(){
		window.localStorage.setItem('user','')
		console.log(this.props.exit.props.router.push({pathname:'login'}))
		     
	}

	render(){
		return(<div className="exitWall" onClick={this.hideExit.bind(this)}>
				<span onClick={this.Exit.bind(this)}>退出</span>
			</div>)
	}
}
class SettingComponent extends React.Component{

	state = {
		gender:'保密',
		nick:'还没有填写昵称',
		username:'',
		isGender:false,
		isNick:false,
		isAddress:false,
		isExit:false
	}
	// 回到我的酒仙
	goMy(){
		this.props.router.push({pathname:'my'})
	}

	// 显示选择性别
	showGender(){
		this.setState({isGender:true})
	}
	// 隐藏选择性别,并接收选择参数
	hideGender(gender){
		if(gender != null){
			return this.setState({isGender:false,gender:gender})
		}
		this.setState({isGender:false})
	
	}
	// 显示修改昵称
	showNick(){
		this.setState({isNick:true})
	}
	// 隐藏修改昵称
	hideNick(nick){
		console.log(nick)
		     
		if(nick == ''){
			return this.setState({isNick:false})
		}
		this.setState({isNick:false,nick:nick})	
	}
	// 显示收货地址
	showAddress(){
		this.setState({isAddress:true})
	}
	// 隐藏收货地址
	hideAddress(){
		this.setState({isAddress:false})
	}
	// 显示退出登录
	showExit(){
		this.setState({isExit:!this.state.isExit})
	}

	// 完成修改个人信息
	fishSetting(){
		http.post('updateUser',{
			phone:this.state.username,
			nickname:this.state.nick,
			gender:this.state.gender
		}).then((res) => {
			console.log(res)
			     
			if(res.data.state){
				alert('修改成功')
			}
			     
		})
		     
	}

	componentDidMount(){

		// 初始个人中心
		http.get('loginState').then((res) => {
			console.log('res-----------',res.data.data.phone)
			if(res.data.state){
				
				let username = res.data.data.phone;

				http.post('getUser',{phone:username}).then((res) => {
					if(res.data.state){
						     
						this.setState({
							username:res.data.data[0].phone,
							nick:res.data.data[0].nickname == null ? '还没有填写昵称' : res.data.data[0].nickname,
							gender:res.data.data[0].gender == null ? '男' : res.data.data[0].gender,
						})
					}
					     
				}) 
			}
		})
	}

	render(){
		let gender = null;
		let nick = null;
		let exit = null;
		let address = null;
		if(this.state.isGender){
			gender = <GenderComponent cGender={this.hideGender.bind(this)} />
		}
		if(this.state.isNick){
			nick = <NickNameComponent cNick={this.hideNick.bind(this)} />
		}
		if(this.state.isAddress){
			address = <AddressComponent addCom={this.state.username} cAddress={this.hideAddress.bind(this)}/>
		}
		if(this.state.isExit){
			exit = <ExitComponent exit={this} showExit={this.showExit.bind(this)}/>
		}


		return(<div style={bg}>
			<div className="settingTitle">
				<i className="iconfont" onClick={this.goMy.bind(this)} >&#xe635;</i>
				<p>个人中心</p>
				<p onClick={this.fishSetting.bind(this)}>完成</p>
			</div>

			<div className="setCon">
				<p>
					<span>头像</span>
					<span><img src="https://misc.jiuxian.com/m_user/images/usercenter/userPhoto.png"/></span>
				</p>				
				<p>
					<span>用户名</span>
					<span>{this.state.username}</span>
				</p>				
				<p>
					<span>昵称</span>
					<span onClick={this.showNick.bind(this)}>{this.state.nick}<i className="iconfont">&#xe636;</i></span>
				</p>				
				<p>
					<span>性别</span>
					<span onClick={this.showGender.bind(this)}>{this.state.gender}<i className="iconfont">&#xe636;</i></span>
				</p>				

			</div>

			<div className="setAddress">
				<p onClick={this.showAddress.bind(this)}>
					<span>地址管理</span>
					<span><i className="iconfont">&#xe636;</i></span>
				</p>
				<p onClick={this.showExit.bind(this)}>
					<span>账号与安全</span>
					<span><i className="iconfont">&#xe636;</i></span>
				</p>
			</div>
			{nick}
			{gender}
			{address}
			{exit}
		</div>)
	}
}

export default SettingComponent;

// <div onClick={this.addAddress.bind(this,'曹伟正')}>
// 						<div>
// 							<p><span>曹伟正</span><span>134*******1234</span></p>
// 							<p>广东省广州市天河区元岗街道</p>
// 						</div>
// 						<i className="iconfont">&#xe625;</i>
// 					</div>