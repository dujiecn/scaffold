import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Reducers from './reducer'

import Home from './container/Home.js'
import configureStore from './store/ConfigStore'
import './app.css'

ReactDOM.render(
	<Provider store={configureStore(Reducers)}>
		<Home />
  </Provider>,
  document.getElementById('root')
);
