import React from 'react'

import {Route,IndexRoute} from 'react-router'

import MainComponent from '../components/main'

import HomeComponent from '../components/home/home'
import CarComponent from '../components/car/car'
import DetailsComponent from '../components/details/details'
import CategoryComponent from '../components/category/category'
import MyComponent from '../components/my/my'
import LoginComponent from '../components/login/login'
import ListComponent from '../components/list/list'



let routes = (
	<Route>
		<Route path="/" component={MainComponent}>
			<IndexRoute component={HomeComponent}/>
			<route path="/home" component={HomeComponent}/>
			<route path="/car" component={CarComponent}/>
			<route path="/category" component={CategoryComponent}/>
			<route path="/my" component={MyComponent}/>
		</Route>

		<Route path="/login" component={LoginComponent}></Route>
		<Route path="/list" component={ListComponent}></Route>
		<Route path="/details" component={DetailsComponent}></Route>

	</Route>
	)

export default routes;