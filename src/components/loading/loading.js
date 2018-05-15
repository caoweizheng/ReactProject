import React from 'react'

import '../../css/loading.scss'

class LoadingComponent extends React.Component{

	render(){
		return(<div className="loading_c"><img src="./src/assets/loading.png"/></div>)
	}
}

export default LoadingComponent;