import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8008',
  json: true,
});

const apiClient = {
  // apiFunction() {},

  async perform(method, resource, data) {
    return client({
      method,
      url: resource,
      data,
      headers: {
        'X-Client': 'Ahoy-hoy'
      }
    }).then(req => {
      return req.data;
    });
  }
};

export default apiClient;
