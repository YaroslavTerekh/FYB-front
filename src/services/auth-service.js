import type { BaseUserModel } from '../models/user-models/base-user-model';
import type { LoginModel } from '../models/user-models/login-model';
import { Login, Register } from '../api/auth-api';
import type { RegisterModel } from '../models/user-models/register-model';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from './local-storage-service';

export default class AuthService {
     dispatch = useDispatch();
     currentUser = useSelector(state => state.user);
     _user: BaseUserModel | undefined;

     async login(model: LoginModel): Promise<void> {
        const response = await Login(model);

        // TODO setAccessToken
    }

    async register(model: RegisterModel): Promise<boolean> {
        const response = await Register(model);

        return response.status === 200;
    }

    isAuthorized(): boolean {
         return getAccessToken() || this.currentUser.token;
    }
}
