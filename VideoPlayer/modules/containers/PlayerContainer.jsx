import React , { Component , PropTyps } from 'react';
import Player from '../components/Player/Player';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  * as PlayerActions from '../actions/PlayerActions';

class PlayerContainer extends Component{
	


	shouldComponentUpdate(nextProps, nextState){
		console.log('Container shouldComponentUpdate');
		console.log(nextProps);
		console.log(nextState);
		return true;
	}

	componentDidMount(){
	
	}	

componentDidUpdate(){
	console.log("Container componentDidUpdate=============>");
	console.log(this.props);
	console.log("<<<<<<<<<Container componentDidUpdate=============>");
}
	doPlay(){
		const { dispatch } = this.props;
		console.log(this.props);
		let data = {
			urls:['http://58.20.179.36/v.cctv.com/flash/mp4video6/TMS/2011/01/05/cf752b1c12ce452b3040cab2f90bc265_h264818000nero_aac32-1.mp4?wsiphost=local']
		}
		dispatch(PlayerActions.play(data));
	}

	render(){

		const {data,actions}=this.props;
		console.log("Container=============>");
		console.log(data);
		console.log("<<<<<<<<<Container=============>");
		let play = this.doPlay.bind(this);
		return (
			<div>
				<Player ref="player" data={data}/>
				<button onClick={play}>Play</button>
			</div>
		);
	}
};

//将state绑定到props上
function mapStateToProps(state){
	return  Object.assign({}, state,{data:{}})
}


//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps)(PlayerContainer);