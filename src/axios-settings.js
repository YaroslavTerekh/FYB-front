import axios from 'axios';
import { getAccessToken } from './services/local-storage-service';
import { useNavigate } from 'react-router-dom';

const API = axios.create({
    baseURL: "https://localhost:7181/api/",
    withCredentials: true,
});


axios.interceptors.request.use(
    config => {
        const token = getAccessToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error).then(r => {});
    }
);

axios.interceptors.response.use(
    response => {
        return response
    },
    function (error) {
        const originalRequest = error.config

        if (
            error.response.status === 401 &&
            originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
        ) {
            return Promise.reject(error)
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            // originalRequest._retry = true
            // const refreshToken = localStorageService.getRefreshToken()
            // return axios
            //     .post('/auth/token', {
            //         refresh_token: refreshToken
            //     })
            //     .then(res => {
            //         if (res.status === 201) {
            //             localStorageService.setToken(res.data)
            //             axios.defaults.headers.common['Authorization'] =
            //                 'Bearer ' + localStorageService.getAccessToken()
            //             return axios(originalRequest)
            //         }
            //     })
        }
        return Promise.reject(error)
    }
)

export default API;
