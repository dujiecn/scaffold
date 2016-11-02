import {combineReducers} from 'redux'
import {TIMESTAMP} from '../const/actionTypes'

const home = (state = {},action) => {
	switch (action.type) {
		case TIMESTAMP:
		return Object.assign({},action);
		default:
		return state;
	}
}

export default combineReducers({home});
