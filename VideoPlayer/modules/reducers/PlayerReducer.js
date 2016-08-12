import { ACTION_PLAY } from '../actions/PlayerActions';
let defaultState = {
	data:{
		urls:['http://58.20.179.36/v.cctv.com/flash/mp4video6/TMS/2011/01/05/cf752b1c12ce452b3040cab2f90bc265_h264818000nero_aac32-1.mp4?wsiphost=local']
	}
};
export default function doPlayerAction(state=defaultState,action){
	switch(action.type){
		case ACTION_PLAY:
			return Object.assign({},state,{data:action.data,time:new Date().getTime()});
		default:
			return state;
	}
}