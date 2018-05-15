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
		this.props.list.props.router.push({pathname:'list',query:{type}})
		      
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

class CgorySearchComponent extends React.Component{
	state ={
		keyWord:['茅台','五粮液','泸州老窖','剑南春','酒老鬼','威士忌','拉菲']
	}
	keySearch(keyword){
		// 携带搜索关键字跳转到list
		this.props.search.props.router.push({pathname:'list',query:{keyword}})
		     
	}

	change(){
		// 调用父组件的isList函数,切换组件
		this.props.isList()
	}
	     
	render(){
		return (<div className="cgoryhotSearch" onClick={this.change.bind(this)}>
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
}



class CategoryComponent extends React.Component{

	state ={
		isList : true,
		keyword:''
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
	// 切换到列表导航
	isList(){
		this.setState({isList:true})	
	}
	// 切断热门搜索
	isHot(){
		this.setState({isList:false})
	}

	change(e){
		this.setState({keyword:e.target.value})
	}
	// 搜索
	search(){
		if(this.state.keyword == ''){
			return;
		}
		this.props.router.push({pathname:'list',query:{keyword:this.state.keyword}}) 	     
	}

	render(){
		let temp = null;

		if(this.state.isList){
			temp = <CgoryListComponent list={this}/>
		}else{
			temp = <CgorySearchComponent search={this} isList={this.isList.bind(this)}/>
		}
		return (<div>
					<div className="cgoryTitle">
						<i className="iconfont" onClick={this.goHome.bind(this)} >&#xe635;</i>
						<p>选酒</p>
					</div>

					<div className="cgorySearch" >
						<input type="text" placeholder="【古井贡特卖】全场满699送年份原浆酒。" onFocus={this.isHot.bind(this)} value={this.state.keyword} onChange={this.change.bind(this)} />
						<input type="button" value="搜索" onClick={this.search.bind(this)} />
					</div>
					{temp}

			</div>)
	}
}

export default CategoryComponent;
