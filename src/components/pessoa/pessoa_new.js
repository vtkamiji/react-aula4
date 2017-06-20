import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPessoa } from '../../actions/pessoaActions';

class PessoaNew extends Component {
	render() {
		return(
			<div>
				<form>
					
				</form>
			</div>
		);
	}
}

function validate(values) {

}

export default reduxForm({
	validate: validate,
	form: 'PessoaNewForm'
})(connect(null, {createPessoa}))(PessoaNew);