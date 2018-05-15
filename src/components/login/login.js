import React from 'react'

import '../../css/login.scss'

class LoginComponent extends React.Component{

	goMy(){
		this.props.router.push({pathname:'my'})
	}
	render(){
		return (<div>
					<div className="cgoryTitle">
						<i className="iconfont" onClick={this.goMy.bind(this)} >&#xe635;</i>
						<p>用户登录</p>
					</div>

					<div className="loginUser">
						<p>
							<i className="iconfont">&#xe612;</i>
							<input type="text" placeholder="手机号码"/>
						</p>
						<p>
							<i className="iconfont">&#xe612;</i>
							<input type="text" placeholder="密码"/>
						</p>
						<span className="loginNow">立即登录</span>
					</div>
			</div>)
	}
}

export default LoginComponent;