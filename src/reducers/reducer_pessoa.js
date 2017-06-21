import _ from 'lodash';
import {ALTERAR_PESSOA} from '../actions/pessoaActions';

export default function(state = {}, action) {
	console.log("reducer_pessoa");
	switch (action.type) {		
		case ALTERAR_PESSOA:
			console.log('ALTERAR_PESSOA');			
			return action.payload.data;
		default:
			return state;
	}
}