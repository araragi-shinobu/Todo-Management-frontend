import axios from "axios";

const BASS_REST_API_URL = 'http://localhost:8080/api/todos';

export const getAllTodos = () => axios.get(BASS_REST_API_URL)