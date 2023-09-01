import API from '../axios-settings';
import { LoginModel } from '../models/user-models/login-model';
import { RegisterModel } from '../models/user-models/register-model';
import { LoginResponse } from '../models/user-models/LoginResponse';

export function Login(model: LoginModel): any {
    return API.post(`auth/login`, model);
}

export function Register(registerUser: RegisterModel): any {
    return API.post(`auth/register`, registerUser);
}
