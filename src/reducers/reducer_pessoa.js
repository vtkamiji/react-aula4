import _ from 'lodash';
import {ALTERAR_PESSOA} from '../actions/pessoaActions';

//serve p nada
export default function(state = {}, action) {
	
	switch (action.type) {		
		case ALTERAR_PESSOA:
			
			return action.payload.data;
		default:
			return state;
	}
}