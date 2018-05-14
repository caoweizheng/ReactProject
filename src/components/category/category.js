import React from 'react'

import '../../css/category.scss'

import {Link} from 'react-router'

import $ from 'jquery'

class CgoryListComponent extends React.Component{

	state = {
		cgoryList:[
		{
			img:'fa fa-glass',
			txt:'白酒'
		},
		{
			img:'fa fa-glass',
			txt:'葡萄酒'
		},
		{
			img:'fa fa-beer',
			txt:'洋酒'
		},
		{
			img:'fa fa-cube',
			txt:'整箱购'
		},
		{
			img:'fa fa-glass',
			txt:'老酒'
		},
		{
			img:'fa fa-gavel',
			txt:'清仓特卖'
		},
		{
			img:'fa fa-plane',
			txt:'海外直采'
		},
		{
			img:'fa fa-glass',
			txt:'精美大坛'
		},
		{
			img:'fa fa-glass',
			txt:'红酒整箱'
		},
		{
			img:'fa fa-glass',
			txt:'值得买'
		},
		{
			img:'fa fa-glass',
			txt:'销量排行'
		},
		{
			img:'fa fa-gift',
			txt:'礼尚往来'
		}
		]
	}

	toList(){
		         
	}

	render(){
		return (
			<div className="cgoryNav"> 
				<ul>
					{
						this.state.cgoryList.map((item,idx) => {

							return (<li key={idx}><Link to="/list" ><i className={item.img}></i>{item.txt}</Link></li>)
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
			temp = <CgoryListComponent />
		}else{
			temp = <CgorySearchComponent search="c1"/>
		}
		return (<div>
					<div className="cgoryTitle">
						<i className="fa fa-angle-left" onClick={this.goHome.bind(this)} ></i>
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

/*

<i class="fa fa-cube" aria-hidden="true"></i>

<i class="fa fa-glass" aria-hidden="true"></i>

<i class="fa fa-th-list" aria-hidden="true"></i>
fa-window-restore
 */