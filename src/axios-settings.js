import axios from 'axios';
import { getAccessToken } from './services/local-storage-service';
import { useNavigate } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { setAlert } from './context/alert-context/alert-actions';
import { useDispatch } from 'react-redux';

const API = axios.create({
    baseURL: "https://fyb-back-57588d719e95.herokuapp.com/api/",
    withCredentials: true,
});

const AxiosInterceptor = ({ children }: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        API.interceptors.request.use(reqInterceptor, errInterceptor);
    }, []);

    const reqInterceptor = async (config: AxiosRequestConfig<Headers>) => {
        API.defaults.headers.common.authorization = `Bearer ${getAccessToken()}`;
        config.headers['Authorization'] = `Bearer ${getAccessToken()}`;

        return config;
    };

    const resInterceptor = (response: any) => response;

    const errInterceptor = async (error: AxiosError) =>
        error.response?.status === 401
            ? handleUnauthorized(error)
            : handleError(error);

    async function handleUnauthorized(error: AxiosError<any, any>) {
        return Promise.reject(error);
    }

    async function handleError(error: AxiosError<any, any>) {
        dispatch(setAlert({ icon:"", isSuccess: false, message: error?.error ?? error?.message}));
        return Promise.reject(error);
    }

    return children;
};


export default API;
export { AxiosInterceptor };
