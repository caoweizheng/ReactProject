import React from 'react'

import {Route,IndexRoute} from 'react-router'

import MainComponent from '../components/main'

import HomeComponent from '../components/home/home'
import CarComponent from '../components/car/car'
import DetailsComponent from '../components/details/details'
import CategoryComponent from '../components/category/category'
import MyComponent from '../components/my/my'
import LoginComponent from '../components/login/login'
import RegisterComponent from '../components/register/register'
import ListComponent from '../components/list/list'

import $ from 'jquery'
import http from '../utils/httpClient.js'

// 设置底部导航高亮
let footHight = (nextState,replace,next) => {

	
	if(nextState.location.pathname == '/car'){
		http.get('loginState').then((res) => {
			if(res.data.state){
				next()
			}else{
				replace({pathname:'login'})
				next()
			}
			     
		})
	}else{
		let routeStr = window.location.hash;
		$('#mianFooter a').css({
				color:'#898989'
		})
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
		next()
		
	}

}


let routes = (
	<Route>
		<Route path="/" component={MainComponent} onEnter={footHight}>
			<IndexRoute component={HomeComponent}/>
			<route path="/home" component={HomeComponent} onEnter={footHight}/>
			<route path="/car" component={CarComponent} onEnter={footHight}/>
			<route path="/category" component={CategoryComponent} onEnter={footHight}/>
			<route path="/my" component={MyComponent} onEnter={footHight}/>
		</Route>

		<Route path="/login" component={LoginComponent}></Route>
		<Route path="/register" component={RegisterComponent}></Route>
		<Route path="/list" component={ListComponent}></Route>
		<Route path="/details" component={DetailsComponent}></Route>

	</Route>
	)

export default routes;