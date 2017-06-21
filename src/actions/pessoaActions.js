import _ from 'lodash';

export const FETCH_PESSOA = 'fetch_pessoa';
export const CREATE_PESSOA = 'create_pessoa';
export const DELETE_PESSOA = 'delete_pessoa';

const listaPessoas = [{id:1,nome:'Valter', idade:34}];

export function fetchPessoa() {
	const request = listaPessoas;

	return {
		type: FETCH_PESSOA,
		payload: {data: request}
	}
}

export function createPessoa(pessoa, callback) {
	listaPessoas.push(pessoa);
	callback();
	return {
		type: CREATE_PESSOA,
		payload: {data: pessoa}
	}
}

export function deletePessoa(pessoa) {
	_.pull(listaPessoas, pessoa);

	return {
		type: DELETE_PESSOA,
		payload: pessoa.id
	}
}