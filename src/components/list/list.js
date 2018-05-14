import React from 'react'

import '../../css/list.scss'

class ListComponent extends React.Component{

	state = {
		goodsList:[]
	}

	goCateogry(){

		this.props.router.push({pathname:'category'})
	}

	toRow(){
 
		document.querySelector('#list').className = document.querySelector('#list').className == 'goodslistRow' ? 'goodslistCol' : 'goodslistRow';

		document.querySelector('#classify span i').className = document.querySelector('#classify span i').className == 'fa fa-th-list' ? 'fa fa-window-restore' : 'fa fa-th-list';
		     
	}
    render(){
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
							<li id="classify"><span onClick={this.toRow.bind(this)}><i className="fa fa-th-list"></i></span></li>
						</ul>
					</div>


					<div id="list" className="goodslistRow">
						<ul>
							{
								this.state.goodsList.map((item) => {
									return (
										<li>
											<img src={item.imgPath}/>
											<div>
												<p className="listDesc">{item.proName}</p>
												<p className="listDesc">
													<span>{item.limit}</span>
													<span>{item.gift}</span>
												</p>
												<p className="listPrice">{item.proPrice}</p>
												<p className="listComment">{item.godPresen}%好评{item.godCount}人评论</p>
											</div>
										</li>
									)
								})
							}

							<li>
								<img src="https://img07.jiuxian.com/2014/0920/3eee2dc02786464989926cc90ee5c3882.jpg"/>

								<div>
									<p className="listDesc">52°全兴头曲·金500ml</p>
									<p className="listAd"><span>满购</span><span>限时抢购</span></p>
									<p className="listPrice">29.00</p>
									<p className="listComment">98%好评&nbsp;&nbsp;&nbsp;1253人评论</p>
								</div>
							</li>
							<li>
								<img src="https://img07.jiuxian.com/2014/0920/3eee2dc02786464989926cc90ee5c3882.jpg"/>

								<div>
									<p className="listDesc">52°全兴头曲·金500ml</p>
									<p className="listAd"><span>满购</span><span>限时抢购</span></p>
									<p className="listPrice">29.00</p>
									<p className="listComment">98%好评&nbsp;&nbsp;&nbsp;1253人评论</p>
								</div>
							</li>
							<li>
								<img src="https://img07.jiuxian.com/2014/0920/3eee2dc02786464989926cc90ee5c3882.jpg"/>

								<div>
									<p className="listDesc">52°全兴头曲·金500ml</p>
									<p className="listAd"><span>满购</span><span>限时抢购</span></p>
									<p className="listPrice">29.00</p>
									<p className="listComment">98%好评&nbsp;&nbsp;&nbsp;1253人评论</p>
								</div>
							</li>
							<li>
								<img src="https://img07.jiuxian.com/2014/0920/3eee2dc02786464989926cc90ee5c3882.jpg"/>

								<div>
									<p className="listDesc">52°全兴头曲·金500ml</p>
									<p className="listAd"><span>满购</span><span>限时抢购</span></p>
									<p className="listPrice">29.00</p>
									<p className="listComment">98%好评&nbsp;&nbsp;&nbsp;1253人评论</p>
								</div>
							</li>
							<li>
								<img src="https://img07.jiuxian.com/2014/0920/3eee2dc02786464989926cc90ee5c3882.jpg"/>

								<div>
									<p className="listDesc">52°全兴头曲·金500ml</p>
									<p className="listAd"><span>满购</span><span>限时抢购</span></p>
									<p className="listPrice">29.00</p>
									<p className="listComment">98%好评&nbsp;&nbsp;&nbsp;1253人评论</p>
								</div>
							</li>
							<li>
								<img src="https://img07.jiuxian.com/2014/0920/3eee2dc02786464989926cc90ee5c3882.jpg"/>

								<div>
									<p className="listDesc">52°全兴头曲·金500ml</p>
									<p className="listAd"><span>满购</span><span>限时抢购</span></p>
									<p className="listPrice">29.00</p>
									<p className="listComment">98%好评&nbsp;&nbsp;&nbsp;1253人评论</p>
								</div>
							</li>

						</ul>
					</div>
        	</div>)
    }
}

export default ListComponent;