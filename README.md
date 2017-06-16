Annotations:
npm install --save redux
npm install --save redux-form@6.6.3
npm install --save redux-promise
npm install --save axios
npm install --save react-router-dom@4.0.0
npm install --save lodash

/*qq que retorna aqui será mostrado em props dentro de BookList
 *liga o estado do Redux ao estado(props) da classe
 *posts: estará em this.props.books
 *state.posts: estado do redux com prop. books(../reducers/index.js)
 */
function mapStateToProps(state) {    
    return { 
    	posts: state.posts
    };
}

/* Em "../reducers/index.js"
 * "formReducer" é um método do redux-form e deve ser mapeado sempre como "form".
*/
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

/* form: 'PostsNewForm' = nome do form para vários forms(deve ser único) */
export default reduxForm({
	 form: 'PostsNewForm'
})(PostsNew);

/*<Switch> serve para pegar apenas o primeiro caminho que combinar com a URL */
<BrowserRouter>
	<Switch>
		<Route path="/posts/new" component={PostsNew} />
		<Route path="/" component={PostsIndex}/>
	</Switch>
</BrowserRouter>

/* Para Axios e Redux funcionarem */
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
