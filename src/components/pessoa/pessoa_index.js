import React, { Component } from 'react';
import { connect } from 'react-redux';

import PessoaList from './pessoa_list';
import PessoaNew from './pessoa_new';


class PessoaIndex extends Component {
	componentDidMount() {		
	}

	render() {
		return (
			<div>
				<PessoaNew />
				<PessoaList />
			</div>
		);
	};	
}

export default PessoaIndex;