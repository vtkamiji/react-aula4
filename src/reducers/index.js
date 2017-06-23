import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';
import FormPluginReducer from './reducer_form_plugin';
import PostsReducer from './reducer_posts';
import PessoasReducer from './reducer_pessoas';
import PessoaReducer from './reducer_pessoa';

const rootReducer = combineReducers({
	pessoa: PessoaReducer,
  	pessoas: PessoasReducer,
	posts: PostsReducer,
	form: FormPluginReducer
});

export default rootReducer;

