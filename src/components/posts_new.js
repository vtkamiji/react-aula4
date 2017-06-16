import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class PostsNew extends Component{
	//field element possui event handlers que liga o <Field> ao elemento retornado.
	//{...field.input}/> liga todos os event handlers ao input, em vez de fazer
	//onChange={field.input.onChange}, onClick={field.input.onClick}
	//field.meta.touched,field.meta.pristine,field.meta.invalid
	renderField(field) {

		//JS6: desconstruction = para simplificar
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label htmlFor="{field.name}">{field.label}</label>
				<input name="{field.name}" 
					type="text" 
					className="form-control"
					{...field.input}					
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>

			</div>
		);
	}
	
	onSubmit(values) {
		//Como o componente está sendo acessado via <Route>, o componente ganha 
		//algumas propriedades como this.props.history
		
		this.props.createPost(values, () => {
			this.props.history.push('/');	
		});
	}

	render() {
		const { handleSubmit } = this.props;

		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field label="Title for Post" name="title" component={this.renderField}/>
				<Field label="Categories" name="categories" component={this.renderField}/>
				<Field label="Post Content" name="content" component={this.renderField}/>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

//será chamado assim q o form for submetido, "values" terá os valores dos input
function validate(values) {
	const errors = {};
	
	if (!values.title || values.title.length < 3) {
		errors.title = "Enter a title that has at least 3 characters!";
	}

	if (!values.categories) {
		errors.categories = "Enter some categories";
	}

	if (!values.content) {
		errors.content = "Enter some content plz";
	}

	//iferrors is empty, the form is fine to submit
	//if errors has any properties, redux form assumes form is invalid
	return errors;
}

//form: 'PostsNewForm' = nome do form para vários forms(deve ser único)
export default reduxForm({
	validate: validate,
	form: 'PostsNewForm'
})(
connect(null, { createPost })(PostsNew)
);