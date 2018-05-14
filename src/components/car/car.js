import React from 'react'

import '../../css/car.scss'

class CarComponent extends React.Component{

    state = {
        data: {
            car1:[]
        }
    }

	render(){
		return (
            <div className="car_z">
                <div className="header_z">
                    <div><i className="fa fa-angle-left i1"></i></div>
                    <div className="car_zt">购物车</div>
                    <div ><i className="fa fa-bars i2"></i></div>
                </div>
                <div className="main_z">
                    <ul>
                        {
                            this.state.data.car1.map((item) => {
                                return (
                                    <li key={item._id}>
                                        <img src={item.image}/>
                                        <h4>{item.proName}</h4>
                                        <p>{item.proPrice}</p>
                                    </li>
                                )
                            })
                        }     
                    </ul>
                </div>
            </div>
        )
	}
}

export default CarComponent;