import React, { Component } from 'react';
import { connect } from 'react-redux';

class PessoaIndex extends Component {
	componentDidMount() {
		console.log("pessoaList Mount");
	}

	render() {
		return (
			<div>
				Pessoa Index
			</div>
		);
	};	
}

export default PessoaIndex;