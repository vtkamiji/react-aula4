import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';


class PostShow extends Component {

	componentDidMount() {
		if (!this.props.post) {
			//react-router(all params in URL)			
			const { id } = this.props.match.params;		
			this.props.fetchPost(id);
		}
	}

	onDeletePost() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push("/");
		});		
	}

	render() {
		const { post } = this.props;
		if (!post) {
			return <div>Loading</div>;
		}

		return (
			<div>
				<Link to="/">Back to index</Link>
				
				<button className="btn btn-danger pull-xs-right" 
					onClick={this.onDeletePost.bind(this)}>Delete Post</button>
				
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

//ownProps = props do component PostShow(this.props === ownProps)
function mapStateToProps({ posts }, ownProps) {
	//react-router(all params in URL)

	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);