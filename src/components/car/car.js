import React from 'react'

import '../../css/car.scss'
import $ from 'jquery'
import http from '../../utils/httpClient.js'

class CarComponent extends React.Component{

    state = {
        carlist: []

    }

    constructor(props){
        super(props)

    }



    componentDidMount(){



        http.post('getCar').then((res) => {
            // this.state.goodsData.push(res.data.data[0])
            console.log(res)
            this.setState({carlist:res.data.data})       
        }) 

    }

    routerBack(){
        this.props.router.go(-1)
    }

    add(idx){
        this.state.carlist[idx].qty++
        this.setState({carlist:this.state.carlist})
    }

    sub(idx){
        this.state.carlist[idx].qty--
        this.setState({carlist:this.state.carlist})
    }
    change(idx,event){
        this.state.carlist[idx].qty = event.target.value;
        this.setState({carlist:this.state.carlist})
    }


	render(){
		return (
            <div className="car_z">

                <div className="header_z">
                    <div><i className="iconfont i1" onClick={this.routerBack.bind(this)} >&#xe635;</i></div>
                    <div className="car_zt">购物车</div>
                    <div ><i className="iconfont i2">&#xe61a;</i></div>
                </div>

                <div className="main_z">
                    <ul>


                        {
                            this.state.carlist.map((item,idx) => {
                                return (
                                    <li key={item._id}>
                                        <img src={item.imgPath}/>
                                        <h4>{item.proName}</h4>
                                        <p><span>￥{item.actPrice}.00</span></p>
                                        <p>
                                            <button className="sub" onClick={this.sub.bind(this,idx)}>-</button>
                                            <input type="number" className="num" value={this.state.carlist[idx].qty} onChange={this.change.bind(this,idx)} />
                                            <button className="add" onClick={this.add.bind(this,idx)}>+</button>
                                            <span className="del">删除</span>
                                        </p>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

                <div className="footer_z">
                    <p>
                        合计：<span>￥457.00</span>
                        <button>去结算</button>
                    </p>
                </div>
            </div>
        )
	}
}

export default CarComponent;