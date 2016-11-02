import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

export default function configureStore(reducer,initialState) {
	let middleware = [thunkMiddleware]
	middleware = [...middleware,loggerMiddleware()]
  return applyMiddleware(...middleware)(createStore)(reducer,initialState);
}
