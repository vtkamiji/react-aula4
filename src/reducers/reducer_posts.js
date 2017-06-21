import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function(state = {}, action) {
	console.log('reducer_posts');
	switch (action.type) {
		case DELETE_POST: 
			//se o state tiver o id do post deletado, retira do state
			return _.omit(state, action.payload);

		case FETCH_POSTS:
			//transformar array em objeto			
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_POST:
			//JS5
			//const post = action.payload.data;
			//const newState = { ...state};
			//newState[post.id] = post;
			//return newState;
			
			//JS6
			// pega o post em action.payload.data e coloca em state, se já houve algum
			//post com o id do action.payload.data, sobrescreve ele
			return { ...state, [action.payload.data.id]: action.payload.data};
		default:
			return state;
	}
}