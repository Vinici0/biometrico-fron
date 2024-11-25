import { AxiosAdapter } from './http/axios.adapter';


export const fetchAdapter = new AxiosAdapter({
  // baseUrl: 'http://192.168.1.17:3000/api',
<<<<<<< HEAD
  baseUrl: 'http://localhost:3000/api',
=======
  baseUrl: 'http://localhost:3002/api',
>>>>>>> c9b6ef7 (first commit)
  params: {
    language: 'es'
  },
});