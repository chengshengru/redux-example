import { combineReducers } from 'redux';
import doPlayerAction from './PlayerReducer';

const rootReducer = combineReducers({
	data:doPlayerAction
});

export default rootReducer;