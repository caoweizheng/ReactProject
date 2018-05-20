import React from 'react'

import '../../css/login.scss'

import http from '../../utils/httpClient.js'

class WuliuComponent extends React.Component{

	goMy(){
		this.props.router.go(-1)
	}
	render(){
		return (<div>
					<div className="cgoryTitle">
						<i className="iconfont" onClick={this.goMy.bind(this)} >&#xe635;</i>
						<p>物流查询</p>
					</div>
			</div>)
	}
	componentDidMount(){
		alert('开发中...')
	}
}

export default WuliuComponent;