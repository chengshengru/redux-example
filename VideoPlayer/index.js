import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import PlayerContainer from './modules/containers/PlayerContainer';
import configureStore from './modules/stores/configureStore';
import { Router , Route ,browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux';

const store = configureStore();

	
	
const history = syncHistoryWithStore(browserHistory, store);


render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={PlayerContainer} />
		</Router>
	</Provider>,
	document.getElementById('app')
);





