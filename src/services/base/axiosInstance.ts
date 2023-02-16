import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://topaz-api.tekup.vn',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 600000,
});

/**
 *  Add a response interceptor to refresh the token:
 *  Axios instance is created and a response interceptor
 *  is added to check for 401 status codes in the response.
 *  If a 401 status code is encountered, the code attempts
 *  to refresh the token by making a POST request to the /refresh-token endpoint.
 *  If the refresh is successful, the new token is added to the headers and the original request
 *  is repeated with the updated headers.
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { config, response } = error;
    const originalRequest = config;

    if (response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Refresh the token
      return axiosInstance.post('/refresh-token').then(({ data }) => {
        // Update the token in the headers
        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.token}`;
        originalRequest.headers['Authorization'] = `Bearer ${data.token}`;

        // Repeat the original request with the updated headers
        return axiosInstance(originalRequest);
      });
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
