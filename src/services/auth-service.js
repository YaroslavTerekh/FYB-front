import type { BaseUserModel } from '../models/user-models/base-user-model';
import type { LoginModel } from '../models/user-models/login-model';
import { Login, Register, RequestCode, VerifyCode } from '../api/auth-api';
import type { RegisterModel } from '../models/user-models/register-model';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken, setAccessToken } from './local-storage-service';
import { setToken, setUser } from '../context/auth-context/user-actions';
import { getCurrentUserHelper } from '../context/auth-context/user-context-helper';

export default class AuthService {
     dispatch = useDispatch();
     currentUser = useSelector(state => state.user);
     _user: BaseUserModel | undefined;

     async login(model: LoginModel): Promise<void> {
        const response = await Login(model);

        if (response.data.token) {
            this.dispatch(setToken(response.data.token));
            setAccessToken(response.data.token);

            getCurrentUserHelper(this.dispatch);
        }
    }

    async register(model: RegisterModel): Promise<boolean> {
        const response = await Register(model);


        if (response.status === 200) {
            this.dispatch(setUser(response.data));

            return true
        }

        return false
    }

    requestCode(): Promise<boolean> {
        return RequestCode(this.currentUser.phoneNumber);
    }

    async verifyCode(code: number): Promise<boolean> {
        const response = await VerifyCode(this.currentUser.phoneNumber, code);

        return response.status === 200;
    }

    isAuthorized(): boolean {

         if (this.currentUser?.firstName) {
             return (getAccessToken() || this.currentUser.token);
         }
         else {
             getCurrentUserHelper(this.dispatch);
         }
    }
}
