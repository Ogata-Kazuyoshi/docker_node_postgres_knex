import axios from 'axios';

const BaseURL = import.meta.env.VITE_NODE_ENV
  ? 'https://docker-knex-postgres.onrender.com/data'
  : 'http://localhost:6100/data';
// const urlpath = import.meta.env.VITE_NODE_ENV;
// console.log('NODE_ENV : ', urlpath);
// console.log('BaseURL[urlpath] : ', BaseURL[urlpath]);

//開発時： "http://localhost:8000/api/v1"
//デプロイ時: endpointまでのパスで良いので "/api/v1"
console.log('BACKEND_DOMAIN : ', import.meta.env.BACKEND_DOMAIN);

const axiosClient = axios.create({
  //   baseURL: BaseURL[urlpath],
  baseURL: BaseURL,
});

export default axiosClient;
