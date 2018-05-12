import React from 'react'

import Swiper from 'swiper'

import '../../../node_modules/swiper/dist/css/swiper.css'

import '../../css/home.scss'


class HomeComponent extends React.Component{

	componentDidMount(){
	    var mySwiper = new Swiper('.swiper-container', {
	    	loop:true,
      		direction:'horizontal',
	      	pagination: {
			    el: '.swiper-pagination',
			  },
  		      autoplay: {
			    delay: 1000,
			    stopOnLastSlide: false,
			    disableOnInteraction: false,
		    }
		})

	    var mySwiper2 = new Swiper('.swiper-container2', {
	      direction:'horizontal',
            	slidesPerView: 4,
		    	spaceBetween: 30
		})
	}
	render(){
		return (<div>
			<div className="homeBanner_c">
		        <div className='swiper-container'>
		          <div className='swiper-wrapper'>
		            <div className='swiper-slide'><img src="https://img10.jiuxian.com/bill/2018/0512/c8ea450f04dd46329a1690aeb3994c4d.jpg"/></div>
		            <div className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2018/0511/8e02344a2be644ff9ef1968fb38ad18c.jpg"/></div>
		            <div className='swiper-slide'><img src="https://img07.jiuxian.com/bill/2018/0511/8e02344a2be644ff9ef1968fb38ad18c.jpg"/></div>
		          </div>
		          <div className="swiper-pagination"></div>
		        </div>
		    </div>
		        <div className='swiper-container2'>
		          <div className='swiper-wrapper'>
		            <div className='swiper-slide'> 1</div>
		            <div className='swiper-slide'> 2</div>
		            <div className='swiper-slide'> 3</div>
		            <div className='swiper-slide'> 4</div>
		            <div className='swiper-slide'> 5</div>
		            <div className='swiper-slide'> 6</div>
		            <div className='swiper-slide'> 7</div>
		            <div className='swiper-slide'> 8</div>
		            <div className='swiper-slide'> 9</div>
		          </div>
		        </div>
			</div>)
	}
}

export default HomeComponent;