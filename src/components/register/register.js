import React from 'react'

import '../../css/login.scss'

import http from '../../utils/httpClient.js'

class RegisterComponent extends React.Component{

	state = {
		phone:'',
		pass:'',
		info:''
	}

	goMy(){
		this.props.router.go(-1)	
	}

	uchange(e){
		this.setState({phone:e.target.value})
	}
	pchange(e){
		this.setState({pass:e.target.value})
	}

	register(){

		if(this.state.phone == '' || this.state.pass == ''){
			this.setState({info:'用户名或密码不能为空!!'})
			document.querySelector('.information').style.display = 'block'	     
			setTimeout(function(){
				document.querySelector('.information').style.display = 'none';

			},500)
			return;
		}

		http.post('checkUser',{phone:this.state.phone}).then((res) => {
			console.log(res)
			if(res.data.state){


			this.setState({info:'用户已存在!'})
			document.querySelector('.information').style.display = 'block'	     
			setTimeout(function(){
				document.querySelector('.information').style.display = 'none';

			},500)

			}else{

				http.post('userRegister',{phone:this.state.phone,password:this.state.pass}).then((res) => {
					console.log(res)

					 if(res.data.state){
					this.setState({info:'注册成功'})
					document.querySelector('.information').style.display = 'block'	
					setTimeout(() =>{
						document.querySelector('.information').style.display = 'none';

					 	this.props.router.push({pathname:'login'})
					},500)		
					 	     
					 }
				})
			}    
		})





	}

	render(){
		return (<div>
					<div className="cgoryTitle">
						<i className="iconfont" onClick={this.goMy.bind(this)} >&#xe635;</i>
						<p>用户注册</p>
					</div>

					<div className="loginUser">
						<p>
							<i className="iconfont">&#xe6a2;</i>
							<input type="text" placeholder="用户名" value={this.state.phone} onChange={this.uchange.bind(this)}/>
						</p>
						<p>
							<i className="iconfont">&#xe63e;</i>
							<input type="password" placeholder="密码" value={this.state.pass} onChange={this.pchange.bind(this)}/>
						</p>
						<span className="loginNow" onClick={this.register.bind(this)}>立即注册</span>
					</div>
					<div className="information">
						<span>{this.state.info}</span>
					</div>
			</div>)
	}
}

export default RegisterComponent;