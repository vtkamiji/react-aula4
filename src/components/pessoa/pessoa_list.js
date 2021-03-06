import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { fetchPessoa, deletePessoa, alterarPessoa } from '../../actions/pessoaActions';
import _ from 'lodash';
import { PESSOA_FORM } from './pessoa_new';

class PessoaList extends Component {
	componentDidMount() {
		this.props.fetchPessoa();
	}

	deletePessoa(pessoa) {
		this.props.deletePessoa(pessoa);
	}

	alterarPessoa(pessoa) {
		// this.props.change(PESSOA_FORM, 'id', pessoa.id);
		// this.props.change(PESSOA_FORM, 'nome', pessoa.nome);
		// this.props.change(PESSOA_FORM, 'idade', pessoa.idade);
		this.props.alterarPessoa(pessoa);

	}

	renderPessoas() {
		return _.map(this.props.pessoas, pessoa => {

				return (
					<tr key={pessoa.id}>
						<td style={{width:'10%'}}>{pessoa.id}</td>
						<td style={{width:'30%'}}>{pessoa.nome}</td>
						<td style={{width:'10%'}}>{pessoa.idade}</td>
						<td>
							<div className="pull-xs-right">
								<button className="btn btn-secondary"
									style={{marginRight: '10px'}}
									onClick={this.alterarPessoa.bind(this,pessoa)}>
									Alterar
								</button>
								<button className="btn btn-danger"
									onClick={this.deletePessoa.bind(this,pessoa)}>Apagar
								</button>
							</div>
						</td>
					</tr>
				);
			});
	}

	render() {
		const transitionOptions = {
			transitionName: "fade",
			transitionEnterTimeout: 500,
			transitionTimeout: 500,
			transitionLeaveTimeout: 500
		}

		if (!this.props.pessoas) {
			return(
				<div>Loading</div>
			);
		}

		return (
			<div>
				<h2>Lista de Pessoas Cadastradas</h2>
				<table className="table table-striped">
					<thead>
					    <tr>
					      	<th>#</th>
					      	<th>Nome</th>
					      	<th>Idade</th>
					      	<th>Ação</th>
					    </tr>
					</thead>
					<tbody>
						<ReactCSSTransitionGroup {...transitionOptions}>
							{this.renderPessoas()}
						</ReactCSSTransitionGroup>
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {pessoas: state.pessoas};
}

export default reduxForm({
	form: PESSOA_FORM
})(connect(mapStateToProps, {fetchPessoa, deletePessoa, alterarPessoa, change})(PessoaList));