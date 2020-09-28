import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mlabs-basic-api.herokuapp.com',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8',
  }
})

export default api;
