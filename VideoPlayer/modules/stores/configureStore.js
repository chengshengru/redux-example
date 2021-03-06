import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';


const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
	thunk,
	logger
)(createStore);


export default function configureStore (initialState) {

	const store = createStoreWithMiddleware(reducers,initialState);
	return store;
};