import axios from 'axios';

console.log('VITE_NODE_ENV : ', import.meta.env.VITE_NODE_ENV);
const BaseURL =
  import.meta.env.VITE_NODE_ENV === 'production'
    ? '3.112.198.94/api/v1/data'
    : 'http://localhost:6100/api/v1/data';
// const BaseURL = 'https://docker-knex-postgres.onrender.com/data';
console.log('BaseURL : ', BaseURL);

console.log('BACKEND_DOMAIN : ', import.meta.env.BACKEND_DOMAIN);

const axiosClient = axios.create({
  baseURL: BaseURL,
});

export default axiosClient;
