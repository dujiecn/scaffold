import {TIMESTAMP} from '../const/actionTypes'


export const now = () => {
	return {
		type:TIMESTAMP,
		timestamp:new Date().getTime()
	}
}
