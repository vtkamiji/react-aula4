import React, {Component} from 'react';
import _ from 'lodash';
import { Field, reduxForm, change } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPessoa } from '../../actions/pessoaActions';

export const PESSOA_FORM = 'PessoaNewForm';
export const SAVE = 'save';
export const UPDATE = 'update';

class PessoaNew extends Component {

	componentDidMount() {
		this.handleInitialize();
		console.log(this.props.formState);
	}

	componentWillReceiveProps(nextProps) {		
		if (nextProps.formState === UPDATE) {
			this.updatePessoa(nextProps.pessoa);
		}		
	}

	updatePessoa(pessoa) {		
		this.props.change(PESSOA_FORM, 'id', pessoa.id);
		this.props.change(PESSOA_FORM, 'nome', pessoa.nome);
		this.props.change(PESSOA_FORM, 'idade', pessoa.idade);
	}

	handleInitialize(){
		//Inicializa o form com valores passados no initialize
		//this.props.initialize();
	}

	renderField(field) {		
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label htmlFor={field.label}>{field.label}</label>
				<input name={field.name} 
					type={field.type} 
					{...field.input}
					disabled={field.disabled}
					className="form-control"/>
			
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPessoa(values, () => {
			this.props.reset();
		});
	}

	render() {
		const { handleSubmit, load, pristine, reset, submitting, formState } = this.props;
		let isUpdate = formState === UPDATE?true:false;

		return(
			<div style={{marginBottom: '70px'}}>
				
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="id" label="id" type="number" disabled={isUpdate} component={this.renderField}/>
					<Field name="nome" label="Nome" type="text" component={this.renderField}/>
					<Field name="idade" label="Idade" type="number" component={this.renderField}/>
					
					<button style={{display: formState == SAVE?'block':'none'}} 
						type="submit" 
						className="btn btn-primary pull-xs-right">
						Adicionar Pessoa</button>
					<button style={{display: formState == UPDATE?'block':'none'}} 
						type="submit" 
						className="btn btn-danger pull-xs-right">
						Altear Pessoa</button>
					<button style={{display: formState == UPDATE?'block':'none'}} 
						type="submit" 
						className="btn btn-primary pull-xs-right">
						Cancelar</button>
				</form>		
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	validateID(values.id, errors);
	validateNome(values.nome, errors);
	validateIdade(values.idade, errors);
	return errors;
}

function validateID(value, errors) {	
	if (!value) {
		errors.id = 'ID não pode ser vazio';
	}
}

function validateNome(value, errors) {
	if (!value || value.length < 3) {
		errors.nome = 'O Nome não pode ser vazio e ter menos que 3 letras';
	}
}

function validateIdade(value, errors) {
	if (!value) {
		errors.idade = 'A idade não pode ser vazio e deve conter apenas números';
	}
	if (!value && value > 130) {
		errors.idade = 'Idade errada';
	}
}

function mapStateToProps({pessoa}) {	
	const formState = _.isEmpty(pessoa)?SAVE:UPDATE;
	return { pessoa, formState };
}

export default reduxForm({
	enableReinitialize: true,
	validate: validate,
	form: PESSOA_FORM
})(connect(mapStateToProps, {createPessoa, change})(PessoaNew));