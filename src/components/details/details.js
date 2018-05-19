import React from 'react'

import '../../css/details.scss'
import http from '../../utils/httpClient.js'

let color = {
    color:'red'
}

class DetailsComponent extends React.Component{

    state = {
        goodsData:[],
        isLove:false,
        proId:'',
        username:''
    }

    componentDidMount(){

        let pId = this.props.location.query.proId;
        console.log(pId)

        http.post('detilsPro',{proId:pId}).then((res) => {
            this.state.goodsData.push(res.data.data[0])
            console.log(res)
            this.setState({proId:pId})

            // console.log(this.state.goodsData)
            // 判断当前商品是否是已经收藏
            http.get('loginState').then((res) => {
                if(res.data.state){
                    let username = res.data.data.phone;
                    this.setState({username:username})
                    console.log(username)
                         
                    http.post('getUser',{
                        phone:username
                    }).then((res) => {
                        let goods = eval(res.data.data[0].collection);
                        console.log(goods)

                        for(let key in goods){

                            if(key == this.state.proId){
                                this.setState({isLove:true})
                                     
                            }
                            
                        }
                                  
                    })

                    // 添加到浏览记录

                    let update ={
                        type:'browser',
                        proId:this.state.proId
                    }
                         
                    http.post('updateUser',{
                        phone:username,
                        update:JSON.stringify(update),
                        browserHistory:JSON.stringify(this.state.goodsData[0])
                    }).then((res) => {
                        if(res.data.state){  
                        }      
                    })      
                    
                }
            })   

        })   
    }

    routerBack(){
        this.props.router.go(-1)
    }

    addCar(){

 
        let proId = this.state.goodsData[0]._id;
        http.post('getCar',{
            username:this.state.username,
            pId:proId
        }).then((res) => {
            console.log(res)
                 
            if(res.data.state){
                 let count = parseInt(res.data.data[0].qty) + 1
                 console.log(count)
                      
                http.post('updateCar',{username:this.state.username,proId:proId,qty:count}).then((res)=> {
                    console.log('updatacar',res)
                    document.querySelector('.information').style.display = 'block'       
                    setTimeout(function(){
                        document.querySelector('.information').style.display = 'none';
                    },100)     
                })
            }else{

                http.post('addCar',{
                    username:this.state.username,
                    pId:this.state.goodsData[0]._id,
                    proName:this.state.goodsData[0].proName,
                    imgPath:this.state.goodsData[0].imgPath,
                    actPrice:this.state.goodsData[0].actPrice,
                    jxPrice:this.state.goodsData[0].jxPrice
                }).then((res) => {
                    console.log('addCar',res)
                    document.querySelector('.information').style.display = 'block'       
                    setTimeout(function(){
                        document.querySelector('.information').style.display = 'none';
                    },100)         
                })
            }
                 
        })


    }
    onLove(){
        this.setState({isLove:!this.state.isLove})

            // 添加收藏
            http.get('loginState').then((res) => {
                if(res.data.state){
                    let username = res.data.data.phone;
                    let update ={
                        type:'collection',
                        proId:this.state.proId
                    }
                    http.post('updateUser',{
                        phone:username,
                        update:JSON.stringify(update),
                        collection:JSON.stringify(this.state.goodsData[0])
                    }).then((res) => {
                        if(res.data.state){

                        }      
                    })
                }
            })
        if(this.state.isLove){
        }else{
            //取消收藏
        }
    }

    toCar(){
        this.props.router.push({pathname:'car'})
    }

    render(){
        return (
            <div className="det">
                <div className="header_d">



                <div><i className="iconfont i3" onClick={this.routerBack.bind(this)} >&#xe635;</i></div>

                    <div className="header_d1">商品详情</div>
                    <div><i className="iconfont">&#xe61a;</i></div>
                </div>

                <div className="main_d">
                    {
                        this.state.goodsData.map((item,idx) => {

                            return (
                                <div className="main_d1" key={idx}>
                                    <img src={item.imgPath}/>
                                    <p className="p1">{item.proName}</p>
                                    <p className="p2">￥<span>{item.actPrice}</span><del>酒仙价:{item.jxPrice}</del></p>
                                </div>
                            )
                        })
                    }


                    <div className="main_d2">
                        <p>优惠<span>品质红酒节满399元送嘉年华酒架</span></p>
                        <p>金币<span>赠送124个金币</span></p>
                    </div>

                    <div className="main_d3">
                        <p className="p4">送至<span>广东省 广州市</span><i className="iconfont">&#xe636;</i></p>
                        <p className="p4 p5">提示<span>此商品不能使用优惠卷</span></p>
                        <p className="p6"><i></i><span>正品保障</span><i></i><span>满100包邮</span><i></i><span>7天退换</span></p>
                    </div>

                    <div><img src="./src/assets/details1.png" /></div>
                </div>

                <div className="footer_d">
                    <ul>
                        <li>
                            <i className="iconfont">&#xe612;</i>
                            <p>侍酒师</p>
                        </li>
                        <li onClick={this.onLove.bind(this,)}>
                            <i style={this.state.isLove ? color : null} className="iconfont">&#xe690;</i>
                            <p>收藏</p>
                        </li>
                        <li onClick={this.toCar.bind(this)}>
                            <a><i className="iconfont">&#xe64e;</i>
                            <p>购物车</p></a>
                        </li>
                    </ul>


                    <button className="btn1" onClick={this.addCar.bind(this)}>加入购物车</button>

                    <button className="btn2">立即购买</button>
                </div>

                <div className="information">
                    <span>添加成功</span>
                </div>
            </div>
        )
    }
}

export default DetailsComponent;