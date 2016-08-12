import { ACTION_PLAY ,ACTION_PAUSE } from '../actions/PlayerActions';
let defaultState = {
	data:{
		urls:['']
	}
};
export default function doPlayerAction(state=defaultState,action){
	switch(action.type){
		case ACTION_PLAY:
			return Object.assign({},state,{data:action.data});
		case ACTION_PAUSE:
			return  Object.assign({},state,{isPause:true});
		default:
			return state;
	}
}