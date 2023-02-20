import axios from 'axios';

export const journalApi = axios.create({
	baseURL: '/api'
});
