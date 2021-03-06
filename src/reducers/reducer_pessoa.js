import _ from 'lodash';
import { SAVE, UPDATE } from '../components/pessoa/pessoa_new';
import { ALTERAR_PESSOA, UPDATE_PESSOA } from '../actions/pessoaActions';


export default function(state = null, action) {
	switch (action.type) {
		case ALTERAR_PESSOA:
			return action.payload.data;
		case UPDATE_PESSOA:
			return null;
		default:			
			return state;
	}
}