import React from 'react'

import '../../css/my.scss'

class MyComponent extends React.Component{

	render(){
		return (<div>
				<div className="myTitle">
					<i></i>
					<p>个人中心</p>
				</div>

				<div className="myWall">
					<img src="https://misc.jiuxian.com/m_user/images/usercenter/topBg.jpg"/>
					<div>
						<img src="https://misc.jiuxian.com/m_user/images/usercenter/userPhoto.png"/>
						<p>登录/注册 <i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i></p>
					</div>
				</div>
		</div>)
	}
}

export default MyComponent;