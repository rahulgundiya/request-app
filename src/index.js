import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL= "http://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.common['Content-type']='application-json'

axios.interceptors.response.use(response=>{
  console.log(response);
  return response;

}
,error=>{
  console.log(error)
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
