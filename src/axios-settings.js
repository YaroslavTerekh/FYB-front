import axios from 'axios';
import { getAccessToken } from './services/local-storage-service';
import { useNavigate } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { AxiosError } from 'axios';

const API = axios.create({
    baseURL: "https://localhost:7181/api/",
    withCredentials: true,
});

const AxiosInterceptor = ({ children }: any) => {


    useEffect(() => {
        API.interceptors.request.use(reqInterceptor, errInterceptor);
    }, []);

    const reqInterceptor = async (config: AxiosRequestConfig<Headers>) => {
        API.defaults.headers.common.authorization = `Bearer ${getAccessToken()}`;
        config.headers['Authorization'] = `Bearer ${getAccessToken()}`;
        debugger
        return config;
    };

    const resInterceptor = (response: any) => response;

    const errInterceptor = async (error: AxiosError) =>
        error.response?.status === 401
            ? handleUnauthorized(error)
            : Promise.reject(error);

    async function handleUnauthorized(error: AxiosError<any, any>) {

        return Promise.reject(error);
    }

    return children;
};


export default API;
export { AxiosInterceptor };
