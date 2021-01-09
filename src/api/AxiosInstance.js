// import axios from 'axios';
// import {BASE_URL}  from '../constants/BASE_URL';
// import { Method } from '../constants/APIMethod';

// const callApi = (method, url, payload = {}) => {
//     const instance = axios.create({
//       baseURL: BASE_URL
//     });

//     switch (method) {
//         case Method.GET:
//             return instance.get(url);
//         case Method.DELETE:
//             return instance.delete(url, payload);
//         case Method.POST:
//             return instance.post(url, payload);
//     }1
// };

// export default {
//     get: (url) => callApi(Method.GET, url),
//     delete: (url, payload) => callApi(Method.DELETE, url, payload),
//     post: (url, payload) => callApi(Method.POST, url, payload)
// }