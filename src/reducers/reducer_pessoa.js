import _ from 'lodash';
import {FETCH_PESSOA} from '../actions/pessoaActions';

export default function(state = {}, action) {
	console.log("reducer_pessoa");	
	console.log(action.type);
	switch (action.type) {
		case FETCH_PESSOA:
			console.log('FETCH_PESSOA');
			console.log(action);
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}	
}