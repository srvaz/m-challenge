import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mlabs-basic-api.herokuapp.com',
})

export default api;
