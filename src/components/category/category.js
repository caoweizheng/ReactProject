import React from 'react'

import '../../css/category.scss'

import {Link} from 'react-router'

import $ from 'jquery'

class CgoryListComponent extends React.Component{

	state = {
		cgoryList:[
		{
			img:'&#xe648;',
			txt:'白酒',
			type:2
		},
		{
			img:'&#xe61d;',
			txt:'葡萄酒',
			type:1
		},
		{
			img:'&#xe645;',
			txt:'洋酒',
			type:3
		},
		{
			img:'&#xe7fb;',
			txt:'整箱购'
		},
		{
			img:'&#xe62b;',
			txt:'老酒'
		},
		{
			img:'&#xe6e5;',
			txt:'清仓特卖'
		},
		{
			img:'&#xe6f2;',
			txt:'海外直采'
		},
		{
			img:'&#xe603;',
			txt:'精美大坛'
		},
		{
			img:'&#xe616;',
			txt:'红酒整箱'
		},
		{
			img:'&#xe62f;',
			txt:'值得买'
		},
		{
			img:'&#xe607;',
			txt:'销量排行'
		},
		{
			img:'&#xe810;',
			txt:'礼尚往来'
		}
		]
	}

	toList(type){
		this.props.type.props.router.push({pathname:'list',query:{type}})
		      
	}

	render(){
		return (
			<div className="cgoryNav"> 
				<ul>
					{
						this.state.cgoryList.map((item,idx) => {

							return (<li key={idx} onClick={this.toList.bind(this,item.type)}><Link to="" ><i className="iconfont" dangerouslySetInnerHTML ={{__html:item.img}}></i>{item.txt}</Link></li>)
						})
					}
					
				</ul>
			</div>
			)
	}
}

let CgorySearchComponent = React.createClass({

	getInitialState :function(){
		return {

			keyWord:['茅台','五粮液','泸州老窖','剑南春','酒老鬼','威士忌','拉菲']
		}
	},

	keySearch:function(item,_this){
		console.log(item,_this)
		     
	},


	render:function(){
		return (<div className="cgoryhotSearch">
					<h3>热门搜索:</h3>
					<div>
						{
							this.state.keyWord.map((item,idx) => {
								return (<span key={idx} onClick={this.keySearch.bind(this,item)}>{item}</span>)
							})
						}
					</div>
				</div>)
	}
})


class CategoryComponent extends React.Component{

	state ={
		isList : true
	}

	goHome(){
		    
		this.props.router.push({pathname:'home'})
		$('#mianFooter a').css({
			color:'#898989'
		})
		$('#mianFooter li a').eq(0).css({
				color:'red'
		})
	}

	isList(){
		setTimeout(()=>{
			this.setState({isList:true})	
		}, 300);
	}
	isHot(){
		this.setState({isList:false})
	}


	render(){
		let temp = null;

		if(this.state.isList){
			temp = <CgoryListComponent type={this}/>
		}else{
			temp = <CgorySearchComponent />
		}
		return (<div>
					<div className="cgoryTitle">
						<i className="iconfont" onClick={this.goHome.bind(this)} >&#xe635;</i>
						<p>选酒</p>
					</div>

					<div className="cgorySearch">
						<input type="text" placeholder="【古井贡特卖】全场满699送年份原浆酒。" onFocus={this.isHot.bind(this)} onBlur={this.isList.bind(this)}/>
						<input type="button" value="搜索"/>
					</div>
					{temp}

			</div>)
	}
}

export default CategoryComponent;
