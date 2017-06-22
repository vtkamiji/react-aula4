import _ from 'lodash';
import {FETCH_PESSOA, CREATE_PESSOA, DELETE_PESSOA, ALTERAR_PESSOA} from '../actions/pessoaActions';

export default function(state = {}, action) {	
	switch (action.type) {
		case FETCH_PESSOA:
			console.log('FETCH_PESSOA');
			return _.mapKeys(action.payload.data, 'id');
		case CREATE_PESSOA:
			console.log('CREATE_PESSOA');
			return { ...state, [action.payload.data.id]: action.payload.data};
		case DELETE_PESSOA:
			console.log('DELETE_PESSOA');
			return _.omit(state, action.payload.data);		
		default:
			return state;
	}
}