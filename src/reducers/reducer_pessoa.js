import _ from 'lodash';
import { SAVE, UPDATE } from '../components/pessoa/pessoa_new';
import { ALTERAR_PESSOA } from '../actions/pessoaActions';


export default function(state = {}, action) {
	switch (action.type) {
		case ALTERAR_PESSOA:			
			return action.payload.data;
		default:			
			return state;
	}
}