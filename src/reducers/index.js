import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import PessoaReducer from './reducer_pessoa';

const rootReducer = combineReducers({
  	pessoas: PessoaReducer,
	posts: PostsReducer,
	form: formReducer
});

export default rootReducer;
