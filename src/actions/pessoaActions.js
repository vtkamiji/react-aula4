export const FETCH_PESSOA = 'fetch_pessoa';

const listaPessoas = [{id:1,nome:'Valter', idade:34}];

export function fetchPessoa() {
	const request = listaPessoas;

	return {
		type: FETCH_PESSOA,
		payload: {data: request}
	}
}