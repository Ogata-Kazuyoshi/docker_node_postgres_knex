import axios from 'axios';

const BaseURL = import.meta.env.VITE_NODE_ENV
  ? 'https://docker-knex-postgres.onrender.com/data'
  : 'http://localhost:6100/data';
console.log('BaseURL : ', BaseURL);

console.log('BACKEND_DOMAIN : ', import.meta.env.BACKEND_DOMAIN);

const axiosClient = axios.create({
  baseURL: BaseURL,
});

export default axiosClient;
