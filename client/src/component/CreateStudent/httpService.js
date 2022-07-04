import axios from 'axios';
axios.interceptors.response.use(null,error => {
  const expetederror = error.response && error.response.status >= 400 && error.response.status < 500
  if (!expetederror){
    console.log('error',error)
  }
  return Promise.reject(error)
})
 const http ={
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}

export default http