import React from 'react'

import {Link} from 'react-router'

import '../css/main.scss'

class MainComponent extends React.Component{

	render(){
		return(<div id="mainBox">
				<div id="mainBody">{this.props.children}</div>
				<div id="mianFooter">
					<ul>
						<li><Link to="/home"><i className='fa fa-home'></i>首页</Link></li>
						<li><Link to="/category"><i className='fa fa-window-restore'></i>分类</Link></li>
						<li><Link to="/car"><i className='fa fa-cart-plus'></i>购物车</Link></li>
						<li><Link to="/my"><i className='fa fa-user'></i>我的酒仙</Link></li>
					</ul>
				</div>
			</div>)
	}
}

export default MainComponent;