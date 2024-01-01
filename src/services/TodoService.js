import axios from "axios";

const BASS_REST_API_URL = 'http://localhost:8080/api/todos';

export const getAllTodos = () => axios.get(BASS_REST_API_URL)

export const saveTodo = (todo) => axios.post(BASS_REST_API_URL, todo)

export const getTodo = (id) => axios.get(BASS_REST_API_URL + '/' + id)

export const updateTodo = (id, todo) => axios.put(BASS_REST_API_URL + '/' + id, todo)

export const deleteTodo = (id) => axios.delete(BASS_REST_API_URL + '/' + id)

export const completeTodo = (id) => axios.patch(BASS_REST_API_URL + "/" + id + '/complete')

export const incompleteTodo = (id) => axios.patch(BASS_REST_API_URL + "/" + id + '/incomplete')