import React from 'react'

import {Link} from 'react-router'

import '../css/main.scss'

import $ from 'jquery'



class MainComponent extends React.Component{

	// 页面刷新时设置底部导航高亮
	componentDidMount(){

	console.log('path',this.props.location.pathname)
		     
		let routeStr = window.location.hash;

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
	scroll(){
		     
		let mainBody = document.getElementById('mainBody')
		mainBody.onscroll = function(){
				let homeSearch = document.querySelector('.homeSearch_c')
				     
				if(homeSearch == null){
					return;
				}
				if(mainBody.scrollTop >= 100){
					homeSearch.style.backgroundColor = 'rgba(255,0,0,0.8)'
					     
				}else{
					homeSearch.style.backgroundColor = 'rgba(0,0,0,0.4)'
				}
		}
	}

	render(){
		return(<div id="mainBox" >
				<div id="mainBody" onScroll={this.scroll.bind(this,event)}>{this.props.children} </div>
				<div id="mianFooter">
					<ul>
						<li><Link to="/home"><i className="iconfont">&#xe653;</i>首页</Link></li>
						<li><Link to="/category"><i className="iconfont">&#xe7f9;	</i>分类</Link></li>
						<li><Link to="/car"><i className="iconfont">&#xe64e;</i>购物车</Link></li>
						<li><Link to="/my"><i className="iconfont">&#xe612;</i>我的酒仙</Link></li>
					</ul>
				</div>
			</div>)
	}
}
export default MainComponent;