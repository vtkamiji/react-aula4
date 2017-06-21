import _ from 'lodash';
import {FETCH_PESSOA, CREATE_PESSOA, DELETE_PESSOA} from '../actions/pessoaActions';

export default function(state = {}, action) {
	console.log("reducer_pessoa");	
	console.log(action.type);
	switch (action.type) {
		case FETCH_PESSOA:
			console.log('FETCH_PESSOA');
			console.log(action);
			return _.mapKeys(action.payload.data, 'id');
		case CREATE_PESSOA: 
			console.log('CREATE_PESSOA');
			return { ...state, [action.payload.data.id]: action.payload.data};
		case DELETE_PESSOA:
			console.log('DELETE_PESSOA');
			console.log(action.payload);
			console.log(state);
			console.log(_.omit(state, action.payload));
			return _.omit(state, action.payload);
		default:
			return state;
	}	
}