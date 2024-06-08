import type { BaseUserModel } from '../models/user-models/base-user-model';
import type { LoginModel } from '../models/user-models/login-model';
import {
    changePasswordConfirm,
    confirmCodeForPasswordChange,
    Login,
    Register,
    RequestCode,
    requestCodeForPasswordChange,
    VerifyCode,
} from '../api/auth-api';
import type { RegisterModel } from '../models/user-models/register-model';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken, setAccessToken } from './local-storage-service';
import { setToken, setUser } from '../context/auth-context/user-actions';
import { getCurrentUserHelper } from '../context/auth-context/user-context-helper';
import { setAlert } from '../context/alert-context/alert-actions';
import {
    removeSpinner,
    removeUserSpinner,
    setSpinner,
    setUserSpinner,
} from '../context/spinner-context/spinner-actions';

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
                      message:
                          typeof ex?.response?.data?.error === "string" ? ex?.response?.data?.error :
                              ex?.response?.data?.error?.join() ?? "Упс... Ви ввели не коректні дані!"
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
            this.dispatch(
                setAlert({
                    icon:"",
                    isSuccess: false,
                    message:
                        typeof ex?.response?.data?.error === "string" ? ex?.response?.data?.error :
                            ex?.response?.data?.error?.join() ?? "Упс... Ви ввели не коректні дані!"
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
                    message:
                        typeof ex?.response?.data?.error === "string" ? ex?.response?.data?.error :
                            ex?.response?.data?.error?.join() ?? "Упс... Ви ввели не коректні дані!"
                }));
        }

    }

    async verifyCode(code: number): Promise<boolean> {
        try {
            const response = await VerifyCode(this.currentUser.phoneNumber, code);

            if (response.data.token) {
                this.dispatch(setToken(response.data.token));
                setAccessToken(response.data.token);

                getCurrentUserHelper(this.dispatch);
            }
            return response.status === 200;
        } catch (ex) {
            this.dispatch(
                setAlert({
                    icon:"",
                    isSuccess: false,
                    message:
                        typeof ex?.response?.data?.error === "string" ? ex?.response?.data?.error :
                            ex?.response?.data?.error?.join() ?? "Упс... Ви ввели не коректні дані!"
                }));
        }
    }
    // PASSWORD


    async RequestCodeForPasswordChange(phone: string,  setSeeCode: any): Promise<boolean> {
        try {
            this.dispatch(setUserSpinner());
            const response = await requestCodeForPasswordChange(phone);
            this.dispatch(removeUserSpinner());
            setSeeCode(true);
            return response.status === 200;
        } catch (ex) {
            this.dispatch(removeUserSpinner());
            this.dispatch(
                setAlert({
                    icon:"",
                    isSuccess: false,
                    message:
                        typeof ex?.response?.data?.error === "string" ? ex?.response?.data?.error :
                            ex?.response?.data?.error?.join() ?? "Упс... Ви ввели не коректні дані!"
                }));
        }
    }

    async ConfirmCodeForPasswordChange(code: any, setSeeCode: any, setSeePass: any): Promise<boolean> {
        try {
            this.dispatch(setUserSpinner());
            const response = await confirmCodeForPasswordChange(code);
            this.dispatch(removeUserSpinner());
            setSeeCode(false);
            setSeePass(true);
            return response.status === 200;
        } catch (ex) {
            this.dispatch(removeUserSpinner());
            this.dispatch(
                setAlert({
                    icon:"",
                    isSuccess: false,
                    message:
                        typeof ex?.response?.data?.error === "string" ? ex?.response?.data?.error :
                            ex?.response?.data?.error?.join() ?? "Упс... Ви ввели не коректні дані!"
                }));
        }
    }

    async OnPasswordSubmit(code: any, navigate: any): Promise<boolean> {
        try {
            this.dispatch(setUserSpinner());
            const response = await changePasswordConfirm(code);
            this.dispatch(removeUserSpinner());
            this.dispatch(setAlert({
                icon:"",
                isSuccess: true,
                message: "Тепер ви можете увійти із новим ПАРОЛЕМ!"
            }));

            setTimeout(() => {
                navigate();
            }, 500);

            return response.status === 200;
        } catch (ex) {
            this.dispatch(removeUserSpinner());
            this.dispatch(
                setAlert({
                    icon:"",
                    isSuccess: false,
                    message:
                        typeof ex?.response?.data?.error === "string" ? ex?.response?.data?.error :
                            ex?.response?.data?.error?.join() ?? "Упс... Ви ввели не коректні дані!"
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
