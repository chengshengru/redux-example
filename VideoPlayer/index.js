import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import PlayerContainer from './modules/containers/PlayerContainer';
import App from './modules/containers/App';
import About from './modules/containers/About';
import UserList from './modules/containers/UserList';
import UserItemContainer from './modules/containers/UserItemContainer';
import configureStore from './modules/stores/configureStore';
import { Router , Route ,IndexRoute , browserHistory, hashHistory} from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux';

const store = configureStore();

	
//browserHistory	
const history = syncHistoryWithStore(hashHistory, store);
/**
 * @param nextState
 * <pre>
 * type RouterState = {
 * 	location: Location;
 * 	routes: Array<Route>;
 * 	params: Params;
 * 	components: Array<Component>;
 * };
 *</pre>
 */
function requireCredentials (nextState, replace, next) {
	console.log(nextState.location);
	if(nextState.isLogin){
		next();
	}else{
		next();
	}
	
}
function urlChanged(){
	console.log(window.location.href);
}
render(
	<Provider store={store}>
		<Router history={history} onUpdate={urlChanged}>
			<Route path="/" component={App}>
				<IndexRoute component={PlayerContainer} />
				<Route path="/about" component={About} onEnter={requireCredentials}/>
				<Route path="/user" >
					<IndexRoute component={UserList} />
					<Route path="item/:id" component={UserItemContainer}/>
				</Route>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);





