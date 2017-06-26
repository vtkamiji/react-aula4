import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import PessoaIndex from './components/pessoa/pessoa_index';


injectTapEventPlugin();
const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
	/*<Switch> serve para pegar apenas o primeiro caminho que combinar com a URL*/
ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
			<Switch>
        <Route path="/pessoa" component={PessoaIndex} />
				<Route path="/posts/new" component={PostsNew} />
				<Route path="/posts/:id" component={PostsShow} />
    			<Route path="/" component={PostsIndex}/>
			</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  </MuiThemeProvider>
  , document.querySelector('.container'));
