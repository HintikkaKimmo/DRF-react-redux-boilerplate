/**
 * Created by Kimmo on 10/07/2017.
 */

import axios from 'axios';
import * as cookie from './cookie';


const api = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
});

// CRSF token is needed in all request that can make a change server side.
api.defaults.headers.post['X-CSRFToken'] = cookie.csrftoken;
api.defaults.headers.put['X-CSRFToken'] = cookie.csrftoken;
api.defaults.headers.patch['X-CSRFToken'] = cookie.csrftoken;
// api defaults.headers.delete['X-CSRFToke'] = cookie.csrftoken; Currently Axios can't set headers for DELETE

// Since we are using JSON APIs, add Accept; application/json to header as default
api.defaults.headers.get.Accept = 'application/json';
api.defaults.headers.post.Accept = 'application/json';
api.defaults.headers.put.Accept = 'application/json';
api.defaults.headers.patch.Accept = 'application/json';

// JWT is going to be saved into cookie
// cookies.save('jwt', response.data.token, { secure: true, httpOnly: true });
// Therefore it will be automatically be sent in the header of all API requests
// JWT will not be accessible to Javascript because it is httpOnly :)

export default api;
