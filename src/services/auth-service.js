import type { BaseUserModel } from '../models/user-models/base-user-model';
import type { LoginModel } from '../models/user-models/login-model';
import { Login, Register, RequestCode, VerifyCode } from '../api/auth-api';
import type { RegisterModel } from '../models/user-models/register-model';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken, setAccessToken } from './local-storage-service';
import { setToken, setUser } from '../context/auth-context/user-actions';
import { getCurrentUserHelper } from '../context/auth-context/user-context-helper';
import { setAlert } from '../context/alert-context/alert-actions';

export default class AuthService {
     dispatch = useDispatch();
     currentUser = useSelector(state => state.user);
     _user: BaseUserModel | undefined;

     async login(model: LoginModel): Promise<void> {
          try {
              const response = await Login(model);

              if (response.data.token) {
                  this.dispatch(setToken(response.data.token));
                  setAccessToken(response.data.token);

                  getCurrentUserHelper(this.dispatch);
              }
          } catch (ex) {
              this.dispatch(
                  setAlert({
                      icon:"",
                      isSuccess: false,
                      message: ex?.error ?? "Перевірте ваші дані, такого облікового запис не існує!"
                  }));
          }
    }

    async register(model: RegisterModel): Promise<boolean> {
        try {
            const response = await Register(model);

            if (response.status === 200) {
                this.dispatch(setUser(response.data));

                return true
            }

            return false
        } catch (ex) {
            debugger
            this.dispatch(
                setAlert({
                    icon:"",
                    isSuccess: false,
                    message: ex?.error ?? "Упс... Ви ввели не коректні дані!"
                }));
        }
    }
    requestCode(phone: string) {
        try {
            RequestCode(phone).then(() => true);

        } catch (ex) {
            this.dispatch(
                setAlert({
                    icon:"",
                    isSuccess: false,
                    message: ex?.error ?? "Упс... Щось пішло не так!"
                }));
        }

    }

    async verifyCode(code: number): Promise<boolean> {
        try {
            const response = await VerifyCode(this.currentUser.phoneNumber, code);

            return response.status === 200;
        } catch (ex) {
            this.dispatch(
                setAlert({
                    icon:"",
                    isSuccess: false,
                    message: ex?.error ?? "Упс... Щось пішло не так!"
                }));
        }
    }

    isAuthorized(): boolean {
         if (this.currentUser?.firstName) {
             return (getAccessToken() || this.currentUser.token);
         }
         else if( getAccessToken() ){
             getCurrentUserHelper(this.dispatch);
         }

         return false;
    }
}
