import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
	componentDidMount() {
		console.log("componentDidMount");
		this.props.fetchPosts();
	}

	componentWillMount() {

	}

	render() {
		return(
			<div>
				Posts Index
			</div>
		);
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindCreators({fetchPosts: fetchPosts}, dispatch);
// }

//Forma resumida de se declarar o mapDispatchToProps
export default connect(null, {fetchPosts})(PostsIndex);