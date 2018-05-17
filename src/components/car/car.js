import React from 'react'

import '../../css/car.scss'
import $ from 'jquery'
import http from '../../utils/httpClient.js'

class CarComponent extends React.Component{

    state = {

        carlist: [],
        totalPrice: 0,

    }




    componentDidMount(){

        http.post('getCar').then((res) => {
            console.log(res)

            this.setState({carlist:res.data.data})

            this.state.carlist.map((item) => {

                this.state.totalPrice += item.qty * item.actPrice
                    
            })
            this.setState({})
        })



        // http.post('updateCar',{proId:proId,qty:count}).then((res)=> {
        //     console.log('updatacar',res)
                         
        // })
    }

    routerBack(){
        this.props.router.go(-1)
    }


    changeQty(idx,event){
        if(event.target.value == ''){
            this.setState({carlist:this.state.carlist,totalPrice:this.state.totalPrice*1-this.state.carlist[idx].actPrice*1*this.state.carlist[idx].qty*1})
        }

        let count = Math.abs(this.state.carlist[idx].qty - event.target.value)

        if(event.target.value > this.state.carlist[idx].qty){
        this.setState({carlist:this.state.carlist,totalPrice:this.state.totalPrice*1+this.state.carlist[idx].actPrice*1*count*1});
        }else{
            this.setState({carlist:this.state.carlist,totalPrice:this.state.totalPrice*1-this.state.carlist[idx].actPrice*1*count*1});
        }
             
    }
    add(idx){

       this.state.carlist[idx].qty++
        this.setState({carlist:this.state.carlist,totalPrice:this.state.totalPrice*1+this.state.carlist[idx].actPrice*1})
        

    }

    sub(idx){
        this.state.carlist[idx].qty--

        this.setState({carlist:this.state.carlist,totalPrice:this.state.totalPrice*1-this.state.carlist[idx].actPrice*1})
        if(this.state.carlist[idx].qty<=1){
            this.state.carlist[idx].qty=1;
        }
    }
    del(idx){
        this.state.carlist.splice(idx,1)
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

                                            <input type="number" className="num" value={this.state.carlist[idx].qty} onInput={this.changeQty.bind(this,idx)} onChange={this.change.bind(this,idx)} />
                                            <button className="add" onClick={this.add.bind(this,idx)}>+</button>
                                            <span className="del" onClick={this.del.bind(this,idx)}>删除</span>
                                        </p>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

                <div className="footer_z">
                    <p>
                        合计：<span className="totalPrice">{this.state.totalPrice}</span>
                        <button>去结算</button>
                    </p>
                </div>
            </div>
        )
    }
}

export default CarComponent;