import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPessoa } from '../../actions/pessoaActions';

class PessoaNew extends Component {

	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label htmlFor={field.label}>{field.label}</label>
				<input name={field.name} type={field.type} 
					{...field.input}
					className="form-control"/>
			
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPessoa(values, () => {
			values = null;
		});
	}

	render() {
		const { handleSubmit } = this.props;

		return(
			<div style={{marginBottom: '70px'}}>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="id" label="id" type="number" component={this.renderField}/>
					<Field name="nome" label="Nome" type="text" component={this.renderField}/>
					<Field name="idade" label="Idade" type="number" component={this.renderField}/>

					
					<button type="submit" className="btn btn-primary pull-xs-right">Adicionar Pessoa</button> 
					
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
})(connect(null, {createPessoa})(PessoaNew));