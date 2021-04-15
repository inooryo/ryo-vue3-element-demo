import axios from 'axios'


const instance = axios.create({
  timeout: 50000
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


instance.interceptors.response.use(
  (res) => {
    let { data, status } = res;
    if (false) {
      return Promise.reject(data);
    }
    return data;
  },
  (error) => {
    // if (error.response.status === xxxx) {
    // todo
    // }
    return Promise.reject(error);
  }
)

export { instance as axios }