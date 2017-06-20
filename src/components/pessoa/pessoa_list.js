import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPessoa } from '../../actions/pessoaActions';
import _ from 'lodash';

class PessoaList extends Component {
	componentDidMount() {		
		console.log("componentDidMount");
		this.props.fetchPessoa();
		console.log(this.props.pessoas);
	}

	renderPessoas() {
		return _.map(this.props.pessoas, pessoa => {
				return (
					<li key={pessoa.id}>
						{pessoa.nome}
					</li>
				);
			});
	}

	render() {
		if (!this.props.pessoas) {
			return(
				<div>Loading</div>
			);
		}

		return (
			<ul>
				{this.renderPessoas()}
			</ul>
		);		
	}
}

function mapStateToProps(state) {
	console.log("STATE");
	console.log(state);
	return {pessoas: state.pessoas};
}

export default connect(mapStateToProps, {fetchPessoa})(PessoaList);