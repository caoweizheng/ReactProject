import React from 'react'

import {Link} from 'react-router'

import '../css/main.scss'

import $ from 'jquery'

class MainComponent extends React.Component{

	MainScroll(){

		let Mainbody = document.getElementById('mainBody') 
		let homeSearch = document.querySelector('.homeSearch_c')
		Mainbody.onscroll = function(){
			if(homeSearch == null){
				return;
			}
			if(Mainbody.scrollTop >= 100){
				homeSearch.style.backgroundColor = 'rgba(255,0,0,0.8)'
				     
			}else{
				homeSearch.style.backgroundColor = 'rgba(0,0,0,0.4)'
			}
			     
		}
		     
	}


	componentDidMount(){
		let routeStr = window.location.hash;
		console.log(routeStr)
		     
		if(routeStr.indexOf('home') > -1 || routeStr == '#/' ){
			$('#mianFooter li a').eq(0).css({
				color:'red'
			})
		}else if(routeStr.indexOf('category') > -1){
			$('#mianFooter li a').eq(1).css({
				color:'red'
			})
		}else if(routeStr.indexOf('car') > -1){
			$('#mianFooter li a').eq(2).css({
				color:'red'
			})
		}else if(routeStr.indexOf('my') > -1){
			$('#mianFooter li a').eq(3).css({
				color:'red'
			})
		}
		$('#mianFooter li').click((e) => {
			$('#mianFooter a').css({
				color:'#898989'
			})
			if(e.target.tagName == "I"){				     
				$(e.target).closest('a').css({
					color:'red'
				})
				return;
			}

			$(e.target).css({
				color:'red'
			})    
		})
		    
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