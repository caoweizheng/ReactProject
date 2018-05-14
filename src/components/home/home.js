import React from 'react'

import Swiper from 'swiper'

import '../../../node_modules/swiper/dist/css/swiper.css'

import '../../css/home.scss'

import http from '../../utils/httpClient.js'

import $ from 'jquery'


class HomeComponent extends React.Component{

	state = {
		data:{
			banner:[],
			nav:[],
			wall:[],
			killList:[],
			go:[],
			go2:[],
			homeSan:[],
			tavern1:[],
			tavern1list:[],
			tavern2:[],
			tavern2list:[],
			tavern3:[],
			tavern3list:[],
			tavern4:[],
			tavern4list:[],
			recommend:[]
		}
	}

	componentDidMount(){
		http.get('getProduct').then((res) => {
			     
			res.data.data.map((item) => {
				if(item.target_type == '1'){
					this.state.data.banner.push(item)
				}else if(item.target_type == 2){
					this.state.data.nav.push(item)
				}else if(item.target_type == 8){
					this.state.data.wall.push(item)
				} else if(item.target_type == 9){
					this.state.data.killList.push(item)
				} else if(item.target_type == 10){
					this.state.data.go.push(item)
				}else if(item.target_type == 11){
					this.state.data.homeSan.push(item)
				}
			})
			this.setState({})
			     
		    var mySwiper = new Swiper('.swiper-container', {
		    	loop:true,
		       	notNextTick: true,
	      		direction:'horizontal',
		      	pagination: {
				    el: '.swiper-pagination',
				  },
				  autoplay:false,
	  		      autoplay: {
				    delay: 3000,
				    stopOnLastSlide: false,
				    disableOnInteraction: false,
			    }
			})
			     
		})
	    var mySwiper2 = new Swiper('.swiper-container2', {
	  		direction:'vertical',
	  		loop:true,
	  		autoplay: {
			    delay: 1500,
			    stopOnLastSlide: false,
			    disableOnInteraction: false,
		    },
	    	slidesPerView: 1,
	    	spaceBetween: 30
		})


	    var mySwiper3 = new Swiper('.swiper-container3', {
	      direction:'horizontal',
            	slidesPerView: 4
		    	// spaceBetween: 30
		})

	    var mySwiper4 = new Swiper('.swiper-container4', {
	      direction:'horizontal',
            	slidesPerView: 2.5
		})
	    var mySwiper5 = new Swiper('.swiper-container5', {
	      direction:'horizontal',
            	slidesPerView: 5.2
		})

		     
	}
	render(){
		return (
				<div>
					<div className="homeSearch_c">
						<h1><img src="./src/assets/jiuxianLogo.png"/></h1>
						<div className="search">
							<input type="text" placeholder="【潭酒特卖】整箱低至59元，爆款满200-100元！"/>
							<input type="button" value="搜索"/>
							<i className="fa fa-search"></i>
						</div>
					</div>




					<div className="homeBanner_c">
				        <div className='swiper-container'>
				          	<div className='swiper-wrapper'>
					          	{
					          		this.state.data.banner.map((item) => {

					          			return (<div key={item._id} className='swiper-slide'><img src={item.image}/></div>)
					          		})
					          	}

				          	</div>
			          		<div className="swiper-pagination"></div>
			        	</div>	        
			    	</div>


				    <div className="homeNav_c">
				    	<ul>
				    		{
				    			this.state.data.nav.map((item) => {
			          				return (<li key={item._id}><img src={item.image}/></li>)
				          		})
							}
				    	</ul>
				    </div>

				    <div className="homeWall_c">

				    	{
				    		this.state.data.wall.map((item) => {
		          				return (<img key={item._id} src={item.image}/>)
			          		})
				    	}

				    	<img src="https://img10.jiuxian.com/bill/2018/0512/3edea79210ef463bbfd1577330b05876.jpg"/>
				    	<img src="https://img06.jiuxian.com/bill/2018/0512/f7b1c4b3477f419380aacf2efb7246b1.jpg"/>
				    	<img src="https://img08.jiuxian.com/bill/2018/0512/afa199b940964f57b018974636c9ac3b.jpg"/>
				    </div>


				    <div className="homeHeadlines_c">

				    	<img src="https://img09.jiuxian.com/bill/2017/1109/acb646caea3d4325b3664c9142852543.jpg"/>
						<div className='swiper-container2'>
							<div className='swiper-wrapper'>

								<p className='swiper-slide'>APP首单满100送100活动规则 点击查看!</p>
								<p className='swiper-slide'>清仓直降 奉赔到底 全场低至1元 清完下架!</p>
								<p className='swiper-slide'>酒仙甄选,以专业的眼光为您挑选一瓶好酒.</p>
								<p className='swiper-slide'>APP首单满100送100活动规则点击查看!</p>
							</div>
						</div>
				    </div>


				    <div className="homekillProList">
				    	<h3>掌上秒拍</h3>
						<div className='swiper-container3 '>
							<ul className='swiper-wrapper'>
					          	{
					          		this.state.data.killList.map((item) => {

					          			return (								
					          				<li className='swiper-slide'>
												<div className="homekill">
													<img className="killimg" src={item.imgPath}/>
													<p className="killDesc">{item.proName}</p>
													<p className="killPrice">{item.proPrice}</p>
													<del className="killdel">{item.jxPrice}</del>
												</div>
											</li>)
					          		})
					          	}

								<li className='swiper-slide'>
									<div className="homekill">
										<img className="killimg" src="https://img09.jiuxian.com/2017/0401/dd8144ada3754a368e368b1cf7548ef74.jpg"/>
										<p className="killDesc">【全网直采特卖】西班牙红酒西班牙奥兰骑士欧瑞安金标干红葡萄酒750ml</p>
										<p className="killPrice">¥19.00</p>
										<del className="killdel">¥59.00</del>
									</div>
								</li>
								<li className='swiper-slide'>
									<div className="homekill">
										<img className="killimg" src="https://img09.jiuxian.com/2017/0401/dd8144ada3754a368e368b1cf7548ef74.jpg"/>
										<p className="killDesc">【全网直采特卖】西班牙红酒西班牙奥兰骑士欧瑞安金标干红葡萄酒750ml</p>
										<p className="killPrice">¥19.00</p>
										<del className="killdel">¥59.00</del>
									</div>

								</li>
								<li className='swiper-slide'>
									<div className="homekill">
										<img className="killimg" src="https://img09.jiuxian.com/2017/0401/dd8144ada3754a368e368b1cf7548ef74.jpg"/>
										<p className="killDesc">【全网直采特卖】西班牙红酒西班牙奥兰骑士欧瑞安金标干红葡萄酒750ml</p>
										<p className="killPrice">¥19.00</p>
										<del className="killdel">¥59.00</del>
									</div>

								</li>
								<li className='swiper-slide'>
									<div className="homekill">
										<img className="killimg" src="https://img09.jiuxian.com/2017/0401/dd8144ada3754a368e368b1cf7548ef74.jpg"/>
										<p className="killDesc">【全网直采特卖】西班牙红酒西班牙奥兰骑士欧瑞安金标干红葡萄酒750ml</p>
										<p className="killPrice">¥19.00</p>
										<del className="killdel">¥59.00</del>
									</div>

								</li>
								<li className='swiper-slide'>
									<div className="homekill">
										<img className="killimg" src="https://img09.jiuxian.com/2017/0401/dd8144ada3754a368e368b1cf7548ef74.jpg"/>
										<p className="killDesc">【全网直采特卖】西班牙红酒西班牙奥兰骑士欧瑞安金标干红葡萄酒750ml</p>
										<p className="killPrice">¥19.00</p>
										<del className="killdel">¥59.00</del>
									</div>

								</li>
								<li className='swiper-slide'>
									<div className="homekill">
										<img className="killimg" src="https://img09.jiuxian.com/2017/0401/dd8144ada3754a368e368b1cf7548ef74.jpg"/>
										<p className="killDesc">【全网直采特卖】西班牙红酒西班牙奥兰骑士欧瑞安金标干红葡萄酒750ml</p>
										<p className="killPrice">¥19.00</p>
										<del className="killdel">¥59.00</del>
									</div>

								</li>
								<li className='swiper-slide'>
									<div className="homekill">
										<img className="killimg" src="https://img09.jiuxian.com/2017/0401/dd8144ada3754a368e368b1cf7548ef74.jpg"/>
										<p className="killDesc">【全网直采特卖】西班牙红酒西班牙奥兰骑士欧瑞安金标干红葡萄酒750ml</p>
										<p className="killPrice">¥19.00</p>
										<del className="killdel">¥59.00</del>
									</div>

								</li>
								<li className='swiper-slide'>
									<div className="homekill">
										<img className="killimg" src="https://img09.jiuxian.com/2017/0401/dd8144ada3754a368e368b1cf7548ef74.jpg"/>
										<p className="killDesc">【全网直采特卖】西班牙红酒西班牙奥兰骑士欧瑞安金标干红葡萄酒750ml</p>
										<p className="killPrice">¥19.00</p>
										<del className="killdel">¥59.00</del>
									</div>

								</li>
							</ul>
						</div>	
				    </div>



				    <div className="homeGo_c">

				    		{
				    			this.state.data.go.map((item) => {
			          				return (<img src={item.imgPath} />)
				          		})
							}

				    	<img src="https://img06.jiuxian.com/bill/2018/0511/df9380d0a6cb43cda50adeaddf8f1bcd.jpg"/>
				    	<img src="https://img06.jiuxian.com/bill/2018/0511/df9380d0a6cb43cda50adeaddf8f1bcd.jpg"/>
				    	<img src="https://img06.jiuxian.com/bill/2018/0511/df9380d0a6cb43cda50adeaddf8f1bcd.jpg"/>
				    	<img src="https://img06.jiuxian.com/bill/2018/0511/df9380d0a6cb43cda50adeaddf8f1bcd.jpg"/>
				    </div>



				    <div className="homeSan_c">

			    		{
			    			this.state.data.homeSan.map((item) => {
		          				return (<img src={item.imgPath} />)
			          		})
						}
				    	<img src="https://img06.jiuxian.com/bill/2018/0504/1a7609e669f84e88a09943e9eb2ada25.jpg"/>

				    	<img src="https://img06.jiuxian.com/bill/2018/0511/02d3b315d37c4136bb9c557c57074b5f.jpg"/>
				    	<img src="https://img09.jiuxian.com/bill/2018/0504/6c592e77cba9464f9efba49673f2ed68.jpg"/>

				    </div>


				    <div className="homeSanlist">
						<div className='swiper-container4'>
							<ul className='swiper-wrapper'>
								<li className='swiper-slide'>
									<img src="https://img10.jiuxian.com/bill/2018/0504/f926bf089e0649b192148d7f609ebf9e.jpg"/>
								</li>
								<li className='swiper-slide'>
									<img src="https://img10.jiuxian.com/bill/2018/0504/f926bf089e0649b192148d7f609ebf9e.jpg"/>
								</li>
								<li className='swiper-slide'>
									<img src="https://img10.jiuxian.com/bill/2018/0504/f926bf089e0649b192148d7f609ebf9e.jpg"/>
								</li>
								<li className='swiper-slide'>
									<img src="https://img10.jiuxian.com/bill/2018/0504/f926bf089e0649b192148d7f609ebf9e.jpg"/>
								</li>
								<li className='swiper-slide'>
									<img src="https://img10.jiuxian.com/bill/2018/0504/f926bf089e0649b192148d7f609ebf9e.jpg"/>
								</li>
								<li className='swiper-slide'>
									<img src="https://img10.jiuxian.com/bill/2018/0504/f926bf089e0649b192148d7f609ebf9e.jpg"/>
								</li>
							</ul>
						</div>
				    </div>


				    <div className="homeGo_c">

				    		{
				    			this.state.data.go2.map((item) => {
			          				return (<img src={item.imgPath} />)
				          		})
							}

				    	<img src="https://img06.jiuxian.com/bill/2018/0511/df9380d0a6cb43cda50adeaddf8f1bcd.jpg"/>
				    	<img src="https://img06.jiuxian.com/bill/2018/0511/df9380d0a6cb43cda50adeaddf8f1bcd.jpg"/>
				    	<img src="https://img06.jiuxian.com/bill/2018/0511/df9380d0a6cb43cda50adeaddf8f1bcd.jpg"/>
				    	<img src="https://img06.jiuxian.com/bill/2018/0511/df9380d0a6cb43cda50adeaddf8f1bcd.jpg"/>
				    </div>




				    <div className="homeFeatured_c">

				    	<h3>精选频道</h3>
				    	<div>
				    		<img src="https://img06.jiuxian.com/bill/2018/0504/5732195707ae47b8a46871157ba05546.jpg"/>
				    		<img src="https://img06.jiuxian.com/bill/2018/0504/5732195707ae47b8a46871157ba05546.jpg"/>
				    		<img src="https://img06.jiuxian.com/bill/2018/0504/5732195707ae47b8a46871157ba05546.jpg"/>
				    		<img src="https://img06.jiuxian.com/bill/2018/0504/5732195707ae47b8a46871157ba05546.jpg"/>
				    		<img src="https://img06.jiuxian.com/bill/2018/0504/5732195707ae47b8a46871157ba05546.jpg"/>
				    	</div>	
				    </div>



				    <div className="homeTavern_c">
				    	<h3>中国白酒馆</h3>
				    	<div className="tavernimg">

				    		{
				    			this.state.data.tavern1.map((item) => {
			          				return (<img src={item.imgPath} />)
				          		})


							}

					    	<img src="https://img08.jiuxian.com/bill/2018/0504/189a5fc9a42c43dbb683fa328659f57f.jpg"/>

					    	<img src="https://img06.jiuxian.com/bill/2018/0504/44e466be5aa7401fb72c89a82056e27a.jpg"/>

					    	<img src="https://img09.jiuxian.com/bill/2018/0504/eafb308af0c24dd88ea340063b37b1c2.jpg"/>
					    	<img src="https://img09.jiuxian.com/bill/2018/0504/eafb308af0c24dd88ea340063b37b1c2.jpg"/>
				    	</div>

						<div className='swiper-container5'>
							<ul className='swiper-wrapper'>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
								<li className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2016/1214/87f5156b749a4f7c8e745b2e144918b0.jpg"/></li>
							</ul>
						</div>

				    </div>


				    <div className="homeTavern_c">
				    	<h3>世界葡萄酒馆</h3>
				    	<div className="tavernimg">

				    		{
				    			this.state.data.tavern2.map((item) => {
			          				return (<img key={item._id} src={item.imgPath} />)
				          		})

							}
						</div>

						<div className='swiper-container5'>
							<ul className='swiper-wrapper'>

								{
					    			this.state.data.tavern2list.map((item) => {
					    				return (<li key={item._id} className='swiper-slide'><img src={item.imgPath} /></li>)
					          		})
								}
							</ul>
						</div>
				    </div>


				    <div className="homeTavern_c">
				    	<h3>小资洋酒馆</h3>
				    	<div className="tavernimg">

				    		{
				    			this.state.data.tavern3.map((item) => {
			          				return (<img key={item._id} src={item.imgPath} />)
				          		})

							}
						</div>

						<div className='swiper-container5'>
							<ul className='swiper-wrapper'>

								{
					    			this.state.data.tavern3list.map((item) => {
					    				return (<li key={item._id} className='swiper-slide'><img src={item.imgPath} /></li>)
					          		})
								}
							</ul>
						</div>
				    </div>

				    <div className="homeTavern_c">
				    	<h3>黄保啤综合馆</h3>
				    	<div className="tavernimg">

				    		{
				    			this.state.data.tavern4.map((item) => {
			          				return (<img key={item._id} src={item.imgPath} />)
				          		})

							}
						</div>

						<div className='swiper-container5'>
							<ul className='swiper-wrapper'>

								{
					    			this.state.data.tavern4list.map((item) => {
					    				return (<li key={item._id} className='swiper-slide'><img src={item.imgPath} /></li>)
					          		})
								}
							</ul>
						</div>
				    </div>



				    <div className="homeRecommend">
				    	<h3>爆款推荐</h3>
				    	<div>
				    		<ul>
				    			{
					    			this.state.data.recommend.map((item) => {
					    				return (<li key={item._id} className='swiper-slide'>
					    							<img src={item.imgPath} />
					    							<p className="recDesc">{item.proName}</p>
					    							<p className="recPrice">{item.proPrice}</p>
					    							<p className="recDel">{item.jxPrice}</p>
					    							<p className="decAD">
						    							<span>{item.limit}</span>
						    							<span>{item.gift}</span>
					    							</p>
				    							</li>)
					          		})
				    			}
				    			<li>
				    				<img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg"/>

				    				<p className="recDesc">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
				    				<p className="recPrice">¥99.00</p>
				    				<p className="recDel"><del>¥299.00</del></p>
				    				<p className="decAD"><span>限时抢购</span><span>满赠</span></p>

				    			</li>
				    			<li>
				    				<img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg"/>

				    				<p className="recDesc">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
				    				<p className="recPrice">¥99.00</p>
				    				<p className="recDel"><del>¥299.00</del></p>
				    			</li>
				    			<li>
				    				<img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg"/>

				    				<p className="recDesc">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
				    				<p className="recPrice">¥99.00</p>
				    				<p className="recDel"><del>¥299.00</del></p>
				    			</li>
				    			<li>
				    				<img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg"/>

				    				<p className="recDesc">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
				    				<p className="recPrice">¥99.00</p>
				    				<p className="recDel"><del>¥299.00</del></p>
				    			</li>
				    			<li>
				    				<img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg"/>

				    				<p className="recDesc">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
				    				<p className="recPrice">¥99.00</p>
				    				<p className="recDel"><del>¥299.00</del></p>
				    			</li>
				    			<li>
				    				<img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg"/>

				    				<p className="recDesc">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
				    				<p className="recPrice">¥99.00</p>
				    				<p className="recDel"><del>¥299.00</del></p>
				    			</li>
				    			<li>
				    				<img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg"/>

				    				<p className="recDesc">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
				    				<p className="recPrice">¥99.00</p>
				    				<p className="recDel"><del>¥299.00</del></p>
				    			</li>
				    			<li>
				    				<img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg"/>

				    				<p className="recDesc">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
				    				<p className="recPrice">¥99.00</p>
				    				<p className="recDel"><del>¥299.00</del></p>
				    			</li>
				    			<li>
				    				<img src="https://img09.jiuxian.com/2017/0204/27f56db1e8454318a780458006426bcf4.jpg"/>

				    				<p className="recDesc">【品质红酒节】澳洲整箱红酒黄尾袋鼠西拉红葡萄酒（6瓶装）</p>
				    				<p className="recPrice">¥99.00</p>
				    				<p className="recDel"><del>¥299.00</del></p>

				    			</li>
			    			</ul>
				    	</div>
				    </div>


			</div>
			)
	}
}

export default HomeComponent;