import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import PlayerContainer from './modules/containers/PlayerContainer';
import configureStore from './modules/stores/configureStore';

const store = configureStore();
console.log('=======>>>>>>>');
console.log(store);
render(
	<Provider store={store}>
		<PlayerContainer />
	</Provider>,
	document.getElementById('app')
);





