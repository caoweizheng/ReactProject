import React from 'react'

import {Link} from 'react-router'

import '../css/main.scss'

class MainComponent extends React.Component{

	MainScroll(){
		let Mainbody = document.getElementById('mainBody') 
		let homeSearch = document.querySelector('.homeSearch_c')
		Mainbody.onscroll = function(){
			if(Mainbody.scrollTop >= 100){
				homeSearch.style.backgroundColor = 'rgba(255,0,0,0.8)'
				     
			}else{
				homeSearch.style.backgroundColor = 'rgba(0,0,0,0.4)'
			}
			     
		}
		     
	}
	render(){
		return(<div id="mainBox">
				<div id="mainBody" onScroll={this.MainScroll.bind(this)}>{this.props.children}</div>
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