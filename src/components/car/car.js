import React from 'react'

import '../../css/car.scss'
import $ from 'jquery'
import http from '../../utils/httpClient.js'

let color = {
    color:'#000',
    fontWeight:600
}

class CarComponent extends React.Component{

    state = {
        carlist: [],
        totalPrice: 0,
        checks:[],
        autoCheck:false
    }

    componentDidMount(){

        http.get('loginState').then((res) => {
            if(res.data.state){
                let username = res.data.data.phone;

                http.post('getCar',{username:username}).then((res) => {
                    console.log(res)
                    if(res.data.data.length <= 0){
                        document.querySelector('.emptyCar').style.display = 'block'
                    }else{
                        document.querySelector('.emptyCar').style.display = 'none'

                    }
                    this.setState({carlist:res.data.data})

                    this.state.carlist.map((item,idx) => {
                        this.state.checks.push(false)
                        this.state.totalPrice += item.qty * item.actPrice
                            
                    })
                    this.setState({})
                })
            }
        })




        // http.post('updateCar',{proId:proId,qty:count}).then((res)=> {
        //     console.log('updatacar',res)
                         
        // })
    }

    routerBack(){
        this.props.router.push({pathname:'my'})
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
    add(idx,pId){

        let count = ++this.state.carlist[idx].qty;
        console.log(count)
             
        http.get('loginState').then((res) => {
            if(res.data.state){
                let username = res.data.data.phone;
                http.post('updateCar',{username:username,proId:pId,qty:count}).then((res)=> {
                    if(res.data.state){
                        this.setState({carlist:this.state.carlist,totalPrice:this.state.totalPrice*1+this.state.carlist[idx].actPrice*1})
                            // 添加成功
                            document.querySelector('.information').style.display = 'block' 
                            setTimeout(function(){
                                document.querySelector('.information').style.display = 'none';
                            },200)
                        }                    
                         
                })
                     
            }
        })
        

    }

    sub(idx,pId){
        if(this.state.carlist[idx].qty<=1){
            this.state.carlist[idx].qty=1;
            return;
        }
        let count = --this.state.carlist[idx].qty
        http.get('loginState').then((res) => {
            if(res.data.state){
                let username = res.data.data.phone;
                http.post('updateCar',{username:username,proId:pId,qty:count}).then((res)=> {
                    if(res.data.state){
                        this.setState({carlist:this.state.carlist,totalPrice:this.state.totalPrice*1-this.state.carlist[idx].actPrice*1})
                            // 减少成功
                            document.querySelector('.information').style.display = 'block'       
                            setTimeout(function(){
                                document.querySelector('.information').style.display = 'none';
                            },200)
                    }                           
                })
            }
        })
    }
    del(idx,pId){
        http.get('loginState').then((res) => {
            if(res.data.state){
                let username = res.data.data.phone;
                http.post('delCar',{username:username,proId:pId}).then((res) => {
                    console.log(res)
                         
                    if(res.data.state){
                        this.state.carlist.splice(idx,1)
                        this.setState({carlist:this.state.carlist})
                        // 删除成功
                        document.querySelector('.information').style.display = 'block'       
                        setTimeout(function(){
                            document.querySelector('.information').style.display = 'none';
                        },200)
                             
                    }
                })
                     
            }
        })

    }
 


    change(idx,pId,event){
        this.state.carlist[idx].qty = event.target.value;
        this.setState({carlist:this.state.carlist})

        let count = event.target.value;

        http.get('loginState').then((res) => {
            if(res.data.state){
                let username = res.data.data.phone;
                http.post('updateCar',{username:username,proId:pId,qty:count}).then((res)=> {
                    if(res.data.state){
                        this.setState({carlist:this.state.carlist})
                            // 修改成功
                            document.querySelector('.information').style.display = 'block'       
                            document.querySelector('.information span').style.opacity = '1'       
                            setTimeout(function(){
                                document.querySelector('.information').style.display = 'none';
                            },200)
                    }                    
                         
                })
                     
            }
        })
    }

    toOrder(){
        this.props.router.push({pathname:'pushOrder'})
        
    }

    initQty(idx,pId){
        if(this.state.carlist[idx].qty == ''){
            this.state.carlist[idx].qty = 0
            this.setState({carlist:this.state.carlist})
            this.add(idx,pId)
        }
             
    }
    toHome(){
        this.props.router.push({pathname:'home'})
    }
    check(idx){
        this.state.checks[idx] = !this.state.checks[idx]
        this.setState({checks:this.state.checks})
        this.autoCheck();
             
    }
    checkAll(){
        this.state.checks.forEach((item,idx) => {
            this.state.checks[idx] = !this.state.checks[idx]; 
        })
        this.autoCheck()
    }

    autoCheck(){
        let autocheck = this.state.checks.every((item) => {
            return item
        })      
        this.setState({autoCheck:autocheck})
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
                                // <input checked={this.state.checks[idx] || false} onChange={this.check.bind(this,idx)} type="checkbox" className="checkbox"/>
                                // <input checked={this.state.autoCheck} onChange={this.checkAll.bind(this)} type="checkbox"/>
                                return (
                                    <li key={item._id}>
                                    
                                        <img src={item.imgPath}/>
                                        <h4>{item.proName}</h4>
                                        <p><span>￥{item.actPrice}.00</span></p>
                                        <p>
                                            <button className="sub" onClick={this.sub.bind(this,idx,item.pId)}>-</button>

                                            <input type="number" className="num" value={this.state.carlist[idx].qty} onBlur={this.initQty.bind(this,idx,item.pId)} onInput={this.changeQty.bind(this,idx)} onChange={this.change.bind(this,idx,item.pId)} />
                                            <button className="add" onClick={this.add.bind(this,idx,item.pId)}>+</button>
                                            <span className="del" onClick={this.del.bind(this,idx,item._id)}>删除</span>
                                        </p>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

                <div className="footer_z">
                    <p>
                    
                    <span className="totalPrice"><span style={color}>合计:¥ </span> {this.state.totalPrice}.00</span>
                        <button onClick={this.toOrder.bind(this)}>去结算</button>
                    </p>
                </div>
                <div className="information">
                    <span>操作成功</span>
                </div>
                <div className="emptyCar">
                    <span><img src="http://www.pingpang365.com/Public/Wap/Images/cart/no.png"/></span>
                    <span onClick={this.toHome.bind(this)}>去购物!</span>
                </div>

            </div>
        )
    }
}

export default CarComponent;