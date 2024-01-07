import axiosClient from './axiosClient';

const dataApi = {
  getAll: () => axiosClient.get('/'),
};

export default dataApi;
