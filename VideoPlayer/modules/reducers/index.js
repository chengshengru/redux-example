import { combineReducers } from 'redux';
import doPlayerAction from './PlayerReducer';
import { routerReducer} from 'react-router-redux';
const rootReducer = combineReducers({
	data:doPlayerAction,
	routing: routerReducer
});

export default rootReducer;