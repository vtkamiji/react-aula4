import _ from 'lodash';
import {FETCH_POSTS, SAVE_POSTS} from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			//transformar array em objeto
			return _.mapKeys(action.payload.data, 'id');
			break;		
		default:
			return state;
	}
}