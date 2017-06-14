import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=valterreact";

export function fetchPosts() {
	console.log(`${ROOT_URL}/posts${API_KEY}`);
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}