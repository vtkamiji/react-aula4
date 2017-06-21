import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import PessoasReducer from './reducer_pessoas';
import PessoaReducer from './reducer_pessoa';

const rootReducer = combineReducers({
	pessoa: PessoaReducer,
  	pessoas: PessoasReducer,
	posts: PostsReducer,
	form: formReducer
});

export default rootReducer;

