/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-promise-reject-errors */
import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://cms-api.aquafox.io',
    // baseURL: 'http://localhost:3000',
    httpsAgent: false, // Disable HTTPS
    headers: {
        'Content-Type': 'application/json'
    }
});
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const setupInterceptors = (store: any,) => {
    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: any) => {
            return Promise.reject(error);
        }
    );
};

// refresh token
// axiosInstance.interceptors.response.use(
//    (response) => {
//      return response;
//    },
//    async (error) => {
//      const originalRequest = error.config;
//      if (error.response.status === 401 && !originalRequest._retry) {
//        originalRequest._retry = true;
//        // Get the refresh token from localStorage or Redux store
//        const refreshToken = localStorage.getItem('refreshToken');
//        // Make a call to refresh the token
//        const { data } = await axios.post('/auth/refresh-token', { token: refreshToken });
//        // Store the new token
//        localStorage.setItem('token', data.token);
//        // Update the Authorization header with the new token
//        axiosInstance.defaults.headers.Authorization = `Bearer ${data.token}`;
//        originalRequest.headers.Authorization = `Bearer ${data.token}`;
//        // Retry the original request
//        return axiosInstance(originalRequest);
//      }
//      return Promise.reject(error);
//    }
//  );

export default axiosInstance;
