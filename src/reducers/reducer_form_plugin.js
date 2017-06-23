import { reducer as formReducer} from 'redux-form';
import { CREATE_PESSOA, UPDATE_PESSOA } from '../actions/pessoaActions';
import { PESSOA_FORM } from '../components/pessoa/pessoa_new';

// export default function() {
export default formReducer.plugin({
		PESSOA_FORM: (state, action) => {
			switch(action.type) {
				case CREATE_PESSOA:
					console.log('REDUCER_FORM_PLUGIN'+action.type);
					return undefined;
				case UPDATE_PESSOA:
					console.log('REDUCER_FORM_PLUGIN'+action.type);
					return undefined;
				default:
					return state;
			}
		}
	});	
// }