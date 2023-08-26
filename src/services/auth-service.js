import API from '../axios-settings';
import { LoginModel } from '../models/user-models/login-model';
import { RegisterModel } from '../models/user-models/register-model';

export function Login(model: LoginModel): any {
    return API.post(`auth/register`, model);
}

export function Register(registerUser: RegisterModel): any {
    return API.post(`auth/register`, registerUser);
}
