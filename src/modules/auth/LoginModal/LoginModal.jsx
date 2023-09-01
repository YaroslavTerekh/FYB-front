import React, { useState } from 'react';
import CustomInput from '../../../components/Input/CustomInput';
import CustomPasswordInput from '../../../components/Input/CustomPasswordInput';
import ModalWindow from '../../../components/Modal/ModalWindow';
import styles from '../Auth.module.css';
import Button from '../../../components/Button/Button';
import AuthService from '../../../services/auth-service';

const LoginModal = ({ isOpen, onClose, registerRequested }) => {
    const userService = new AuthService();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function changeEmailHandler(e) {
        setEmail(e?.target?.value);
    }

    function changePasswordHandler(e) {
        setPassword(e?.target?.value);
    }

    async function login() {
        await userService.login({ email, password });
    }

    return <>
        <ModalWindow
            element={
                <section className={styles.authBox} >
                    <div className={`${styles.content} vetrino`} >
                        <h2 className={styles.contentTitle}>Увійти</h2>
                        <div className={styles.inputBox}>
                            <CustomInput onChange={changeEmailHandler} className={styles.customInput} placeholder={"Email"} type={"email"} required={true}/>
                        </div>
                        <div className={styles.inputBox}>
                            <CustomPasswordInput onChange={changePasswordHandler} className={styles.customInput} placeholder={"Пароль"} required={true}/>
                        </div>
                        <button className={styles.linkBox} onClick={registerRequested}>
                            <p className={styles.text}>Ще не маєте особистого кабінету?</p>
                            <p className={styles.link}>Зареєструватися</p>
                        </button>
                        <Button
                            className={styles.btn}
                            aria-expanded={true}
                            aria-controls={`example-panel-`}
                            onClick={login}
                        >
                            <p>Далі</p>
                        </Button>
                    </div>

                </section>
            }
            isOpen={isOpen}
            onClose={onClose}
            styles={{ bgColor:'var(--main-bg)', width: '609px', height: '480px', border: '2px solid var(--beige, #FFEDE4);', overlayBgColor: 'none'}}
        />
    </>
}

export default LoginModal;
