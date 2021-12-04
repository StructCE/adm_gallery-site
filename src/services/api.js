import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://adm-gallery-api.herokuapp.com/'
});
