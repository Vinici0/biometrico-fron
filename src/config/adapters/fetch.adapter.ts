import { AxiosAdapter } from './http/axios.adapter';


export const fetchAdapter = new AxiosAdapter({
  // baseUrl: 'http://192.168.1.17:3000/api',
  baseUrl: 'http://localhost:3002/api',
  params: {
    language: 'es'
  },
});