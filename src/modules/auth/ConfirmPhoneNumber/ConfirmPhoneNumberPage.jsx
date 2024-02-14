import React, { useEffect, useRef, useState } from 'react';
import CustomInput from '../../../components/Input/CustomInput';
import styles from '../Auth.module.css';
import Button from '../../../components/Button/Button';
import AuthService from '../../../services/auth-service';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../../context/alert-context/alert-actions';

const ConfirmPhoneNumber = () => {
    const userService = new AuthService();
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert);
    const [code, setCode] = useState("");
    const [requested, setRequested] = useState(false);

    useEffect(() => {

        requestCode();
    }, []);

     function requestCode() {
        userService.requestCode();
    }

    function changeCodeHandler(e) {
        setCode(e?.target?.value);
    }

    async function verifyCode() {
        const isSuccess = await userService.verifyCode(+code);

        if (isSuccess) {
            dispatch(setAlert({ icon:"", isSuccess: true, message: "Номер телефону, підтверджено!" }))
        } else {
            dispatch(setAlert({ icon:"", isSuccess: false, message: "Упс, щось пішло не так!" }))
        }
    }

    const formRef = useRef(null);

    return <>
        <section ref={formRef} className={styles.confNum} >
            <div className={`${styles.content} vetrino`} >
                <p className={styles.text}>
                    Ми надіслаи код-підтвердження на Ваш номер телефону, будь ласка, введіть його в поле нижче:
                </p>
                <div className={styles.inputBox}>
                    <CustomInput
                        onChange={changeCodeHandler}
                        className={styles.customInput}
                        customInputContainer={styles.customInputContainer}
                        placeholder={"Введіть код"}
                        type={"tel"}
                        required={true}
                        value={code}
                        formRef={formRef}
                        name={"RequestedCode"}
                    />
                    <Button
                        className={styles.btn + " " + styles.confBtn}
                        aria-expanded={true}
                        aria-controls={`example-panel-`}
                        onClick={verifyCode}
                    >
                        <p>Підтвердити</p>
                    </Button>
                    <p className={styles.tip}>
                        *Після підтвердження номеру телефону Вас буде переадресовано на форму входу в особистий кабінет.
                    </p>
                </div>
            </div>
        </section>
    </>
}

export default ConfirmPhoneNumber;
