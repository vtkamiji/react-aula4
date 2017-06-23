import _ from 'lodash';
import {FETCH_PESSOA, CREATE_PESSOA, DELETE_PESSOA, ALTERAR_PESSOA, UPDATE_PESSOA} from '../actions/pessoaActions';

export default function(state = {}, action) {	
	switch (action.type) {
		case FETCH_PESSOA:			
			return _.mapKeys(action.payload.data, 'id');
		case CREATE_PESSOA:			
			return { ...state, [action.payload.data.id]: action.payload.data};
		case DELETE_PESSOA:			
			return _.omit(state, action.payload.data);
		case UPDATE_PESSOA:
			console.log(action.payload.data);
			console.log(_.find(state, {id: action.payload.data.id}));
			console.log(_.merge(_.find(state, {id: action.payload.data.id}),action.payload.data));

			_.merge(_.find(state, {id: action.payload.data.id}),action.payload.data);
			
			console.log(state);
			return state;

		default:
			return state;
	}
}