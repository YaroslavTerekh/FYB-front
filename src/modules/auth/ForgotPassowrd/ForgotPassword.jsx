import React, { useEffect, useRef, useState } from 'react';
import CustomInput from '../../../components/Input/CustomInput';
import styles from '../Auth.module.css';
import Button from '../../../components/Button/Button';
import AuthService from '../../../services/auth-service';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../../context/alert-context/alert-actions';
import { useNavigate } from 'react-router-dom';
import CustomPasswordInput from '../../../components/Input/CustomPasswordInput';
import { removeUserSpinner } from '../../../context/spinner-context/spinner-actions';

const ForgotPassword = () => {
    const userService = new AuthService();
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert);


    const [code, setCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const [seeCode, setSeeCode] = useState(false);
    const [seePass, setSeePass] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function changeCodeHandler(e) {
        setCode(e?.target?.value);
    }

    function changePhoneHandler(e) {
        setPhoneNumber(e?.target?.value);
    }

    async function onPhoneCodeRequestSubmit() {
        if (phoneNumber && phoneV) {
            await userService.RequestCodeForPasswordChange(phoneNumber, setSeeCode);
        }
    }

    async function onCodeSubmit() {
        if (code && phoneNumber && codeV) {
            const model = {
                phoneNumber: phoneNumber,
                confirmationCode: +code
            }

            await userService.ConfirmCodeForPasswordChange(model, setSeeCode, setSeePass);
        }
    }

    function goToHome() {
        navigate("/");
    }

    async function onPasswordSubmit() {
        if (password && code && phoneNumber && passV) {
            const model = {
                phoneNumber: phoneNumber,
                newPassword: password,
                confirmationCode: +code
            }

            await userService.OnPasswordSubmit(model, goToHome);
        }
    }

    const [passV, setPassV] = useState(false);
    const [phoneV, setPhoneV] = useState(false);
    const [codeV, setCodeV] = useState(false);
    function changePasswordHandler(e) {
        setPassword(e?.target?.value);
    }


    const formRef = useRef(null);
    const formRef1 = useRef(null);
    const formRef2 = useRef(null);

    return <>
        {
            !seeCode && !seePass &&
            <form ref={formRef} className={styles.confNum} >
                <div className={`${styles.content} vetrino`} >
                    <p className={styles.text}>
                        Якщо ви забули пароль, вам потрібно підтвердити номер телефону!
                    </p>
                    <div className={styles.inputBox}>
                        <CustomInput
                            onChange={changePhoneHandler}
                            className={styles.customInput}
                            placeholder={"Телефон"}
                            type={"tel-l"}
                            required={true}
                            formRef={formRef}
                            name={"RegisterPhone"}
                            value={phoneNumber}
                            customInputContainer={styles.customInputContainer}
                            isValid={setPhoneV}
                        />
                        <Button
                            className={styles.btn + " " + styles.confBtn}
                            aria-expanded={true}
                            aria-controls={`example-panel-`}
                            onClick={onPhoneCodeRequestSubmit}
                        >
                            <p>Підтвердити</p>
                        </Button>
                        <p className={styles.tip}>
                            номер повинен починатися з 0: 0900000000
                        </p>

                        <p className={styles.tip}>
                            *Після підтвердження номеру телефону Ви отримаєте код
                        </p>
                    </div>
                </div>
            </form>
        }
        {seeCode &&
            <form ref={formRef1} className={styles.confNum} >
                <div className={`${styles.content} vetrino`} >
                    <p className={styles.text}>
                        Вас надійшов SMS код на номер телефону!
                    </p>
                    <div className={styles.inputBox}>
                        <CustomInput
                            onChange={changeCodeHandler}
                            className={styles.customInput}
                            customInputContainer={styles.customInputContainer}
                            placeholder={"Введіть код"}
                            type={"text"}
                            required={true}
                            value={code}
                            formRef={formRef1}
                            name={"RequestedCode"}
                            isValid={setCodeV}
                        />
                        <Button
                            className={styles.btn + " " + styles.confBtn}
                            aria-expanded={true}
                            aria-controls={`example-panel-`}
                            onClick={onCodeSubmit}
                        >
                            <p>Підтвердити</p>
                        </Button>
                        <p className={styles.tip}>
                            *Вам потрібно ввести код, щоб підтвердити особу!
                        </p>
                    </div>
                </div>
            </form>
        }
        {
            seePass &&
            <form ref={formRef2} className={styles.confNum} >
                <div className={`${styles.content} vetrino`} >
                    <p className={styles.text}>
                        Введіть НОВИЙ пароль!
                    </p>
                    <div className={styles.inputBox}>
                        <div className=''>
                            <CustomPasswordInput
                                onChange={changePasswordHandler}
                                className={""}
                                placeholder={"Пароль"}
                                required={true}
                                formRef={formRef2}
                                name={"RegisterPassword"}
                                value={password}
                                customInputContainer={styles.customInputContainer}
                                isValid={setPassV}
                                isRegistr={true}
                            />
                        </div>
                        <Button
                            className={styles.btn + " " + styles.confBtn}
                            aria-expanded={true}
                            aria-controls={`example-panel-`}
                            onClick={onPasswordSubmit}
                        >
                            <p>Підтвердити</p>
                        </Button>
                        <p className={styles.tip}>
                            *Після зміни паролю Ви зможете увійти в особистий кабінет!
                        </p>
                    </div>
                </div>
            </form>
        }
    </>
}

export default ForgotPassword;
