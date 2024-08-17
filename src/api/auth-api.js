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

export function RequestCode(phoneNumber: string): any {
    return API.post(`auth/generate-verify-code`, { phoneNumber });
}

export function VerifyCode(phoneNumber: string, code: number): any {
    return API.post(`auth/verify-code`, { phoneNumber, code });
}

export function requestCodeForPasswordChange(phone: string) {
    return API.post(`auth/code-request-password`, { phoneNumber: phone });
}

export function confirmCodeForPasswordChange(model: any) {
    return API.post(`auth/code-request-password-confirm`, { ...model });
}

export function changePasswordConfirm(model: any) {
    return API.post(`auth/confirm-forgot-password-change`, model);
}

export function getCurrentUser(): any {
    return API.get(`auth/get-user`);
}
