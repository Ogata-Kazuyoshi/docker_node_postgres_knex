import axios from 'axios';

const proxyApi = {
  getAll: () => axios.get('/api/v1/data'),
};

export default proxyApi;
