import React from 'react'

import '../../css/list.scss'

import http from '../../utils/httpClient.js'

let ListRow = () => {
	return <i className="iconfont" dangerouslySetInnerHTML ={{__html:'&#xe7f9;'}}></i>
}
let ListCol = () => {
	return <i className="iconfont" dangerouslySetInnerHTML ={{__html:'&#xe619;'}}></i>
}

class ListComponent extends React.Component{

	state = {
		goodsList:[],
		isRow:true
	}
	goCateogry(){
		this.props.router.push({pathname:'category'})
	}

	toRow(){
 
		document.querySelector('#list').className = document.querySelector('#list').className == 'goodslistRow' ? 'goodslistCol' : 'goodslistRow';

		this.setState({isRow:!this.state.isRow})

	}

	componentWillMount(){
		let type = window.location.hash.split('?')[1].split('=')[1];

		http.get('getProduct').then((res) => {
			res.data.data.map((item) => {
   
				if(item.d_type == type){
					this.state.goodsList.push(item)
				}
			})
			this.setState({})
		})
		     
		     
		     
	}

    render(){
    	let temp = null;
    	if(this.state.isRow){
    		temp = <ListRow />
    	}else{
    		temp = <ListCol />
    	}
        return (<div id="listBody">
					<div className="listTitle">
						<i className="fa fa-angle-left" onClick={this.goCateogry.bind(this)} ></i>
						<p>商品列表</p>
					</div>

					<div className="listTab">
						<ul>
							<li><span>综合</span></li>
							<li><span>销量</span></li>
							<li><span>价格</span></li>
							<li id="classify"><span onClick={this.toRow.bind(this)}>{temp}</span></li>
						</ul>
					</div>


					<div id="list" className="goodslistRow">
						<ul>
							{
								this.state.goodsList.map((item) => {

									return (
										<li key={item._id}>
											<img src={item.imgPath}/>
											<div>
												<p className="listDesc">{item.proName}</p>
												<p className="listAd">
													<span>{item.limit}</span>
													<span>{item.gift}</span>
												</p>
												<p className="listPrice">¥ {item.actPrice}.00</p>
												<p className="listComment"><span className="presen">{item.goodPersen}%好评</span> 	{item.goodCount}人评论</p>
											</div>
										</li>
									)
								})
							}

						</ul>
					</div>
        	</div>)
    }
}

export default ListComponent;