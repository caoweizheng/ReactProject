import React from 'react'
import '../../css/setting.scss'


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
		consignee:'',
		contact:'',
		local:'',
		title:'新增收货地址'

	}

	componentDidMount(){
		if(this.props.add != ''){
			this.setState({
				consignee:this.props.add.consignee,
				contact:this.props.add.contact,
				local:this.props.add.local,
				title:'编辑收货地址'
			})
		}

		     
	}

	goAddress(){
		this.props.hideAdd()
	}

	add(){

	}
	changeConsignee(e){
		this.setState({consignee:e.target.value})
	}
	changeConcat(){
		this.setState({contact:e.target.value})
	}
	changeLocal(){
		this.setState({local:e.target.value})
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
						<i onClick={this.add.bind(this)}>保存</i>
					</div>
			</div>)
	}
}

// 地址管理组件
class AddressComponent extends React.Component{

	state = {
		isAdd:false,
		data:''
	}

	goSetting(){
		this.props.cAddress()
	}

	addAddress(data){

		data = {
			consignee:'曹伟正',
			contact:'13427431482',
			local:'广州天河'
		}
		// this.setState({data:data})
		if(data != 1){
			this.setState({data:data,isAdd:true})
		}else{
			this.setState({isAdd:true})
		}   
	}

	hideAdd(){
		this.setState({isAdd:false})
	}

	render(){
		let address = null;
		if(this.state.isAdd){
			address = <Address add={this.state.data} hideAdd={this.hideAdd.bind(this)}/>
		}
		return(<div className="addressWall">
				<div className="addressTitle">
					<i className="iconfont" onClick={this.goSetting.bind(this)} >&#xe635;</i>
					<p>地址管理</p>
				</div>
				<div className="addressCon">
					<div onClick={this.addAddress.bind(this,'曹伟正')}>
						<div>
							<p><span>曹伟正</span><span>134*******1234</span></p>
							<p>广东省广州市天河区元岗街道</p>
						</div>
						<i className="iconfont">&#xe625;</i>
					</div>
				</div>
				<div className="addressBottom">
					<span className="addAddress" onClick={this.addAddress.bind(this,1)}>添加新地址</span>
				</div>
				{address}
			</div>)
	}
}
class SettingComponent extends React.Component{

	state = {
		gender:'保密',
		nick:'还没有填写昵称',
		isGender:false,
		isNick:false,
		isAddress:false
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

	showAddress(){
		this.setState({isAddress:true})
	}
	hideAddress(){
		this.setState({isAddress:false})
	}

	render(){
		let gender = null;
		let nick = null;
		let address = null;
		if(this.state.isGender){
			gender = <GenderComponent cGender={this.hideGender.bind(this)} />
		}
		if(this.state.isNick){
			nick = <NickNameComponent cNick={this.hideNick.bind(this)} />
		}
		if(this.state.isAddress){
			address = <AddressComponent cAddress={this.hideAddress.bind(this)}/>
		}


		return(<div style={bg}>
			<div className="settingTitle">
				<i className="iconfont" onClick={this.goMy.bind(this)} >&#xe635;</i>
				<p>个人中心</p>
				<p>完成</p>
			</div>

			<div className="setCon">
				<p>
					<span>头像</span>
					<span><img src="https://misc.jiuxian.com/m_user/images/usercenter/userPhoto.png"/></span>
				</p>				
				<p>
					<span>用户名</span>
					<span>jwq7583123</span>
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
				<p>
					<span>账号与安全</span>
					<span><i className="iconfont">&#xe636;</i></span>
				</p>
			</div>
			{nick}
			{gender}
			{address}
		</div>)
	}
}

export default SettingComponent;