import React from 'react'

import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

import _routes from './router/router'
import LoadingComponent from './components/loading/loading.js'
ReactDOM.render(
	<div>
		<Router history={hashHistory} routes = {_routes}>
		</Router>
		<LoadingComponent />
	</div>
	,document.getElementById('app')
)

