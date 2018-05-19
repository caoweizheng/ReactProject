import React from 'react'
import '../../css/order.scss'

import http from '../../utils/httpClient.js'
let bg = {
	background:'#e9e9ea61',
	height:'100%',
	display:'flex',
	flexDirection:'column'
}
let span = {
	fontSize:'12px',
	color:'red',
	float:'right',
	marginRight:'10px'
}
let noMargin = {
	marginTop:'40px'
}
let pTop = {
	width:'100%',
	position:'fixed',
	left:'0',
	top:'0'
}
class CollectionComponent extends React.Component{

	state = {
		type:0,
		collections:[]
	}

	goMy(){
		this.props.router.push({pathname:'my'})
	}

	delCollection(proId,idx){

        http.get('loginState').then((res) => {
            if(res.data.state){
                let username = res.data.data.phone;
                let update ={
                    type:'collection',
                    proId:proId
                }
                http.post('updateUser',{
                    phone:username,
                    update:JSON.stringify(update),
                    collection:'del'
                }).then((res) => {
                    if(res.data.state){
                    	this.state.collections.splice(idx,1)
                    	this.setState({collections:this.state.collections})
                    }      
                })
            }
        })
	}	

	componentDidMount(){

        http.get('loginState').then((res) => {
            if(res.data.state){
                let username = res.data.data.phone;
                this.setState({username:username})
                console.log(username)
                     
                http.post('getUser',{
                    phone:username
                }).then((res) => {
                    let goods = eval(res.data.data[0].collection);
                    // console.log(goods)

                    for(let key in goods){

                        this.state.collections.push(goods[key])
                        
                    }
                    this.setState({})     	
                         
                })
            }
        })
	}

	toDetails(pid){
		this.props.router.push({pathname:'details',query:{proId:pid}})

	}
	
	render(){

		return(<div style={bg}>
			<div className="orderTitle" style={pTop}>
				<i className="iconfont" onClick={this.goMy.bind(this)} >&#xe635;</i>
				<p>商品收藏</p>
			</div>

			<div id="list" className="goodslistRow" style={noMargin}>
				<ul >
					{
						this.state.collections.map((item,idx) => {
							item = JSON.parse(item)
							console.log(item)
							     
							return (
								<li key={item._id} >
									<img src={item.imgPath} onClick={this.toDetails.bind(this,item._id)}/>
									<div>
										<p className="listDesc">{item.proName}</p>
										<p className="listAd">
											<span>{item.limit}</span>
											<span>{item.gift}</span>
										</p>
										<p className="listPrice">¥ {item.actPrice}.00</p>
										<p className="listComment"><span className="presen">{item.goodPersen}%好评</span> 	{item.goodCount}人评论 <span style={span} onClick={this.delCollection.bind(this,item._id,idx)}>删除</span></p>
										
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
export default CollectionComponent;