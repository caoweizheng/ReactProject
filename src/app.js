import React from 'react'

import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

import _routes from './router/router'

ReactDOM.render(
		<Router history={hashHistory} routes = {_routes}/>
	,document.getElementById('app')
)

