import React, { useRef, useState } from 'react';
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
        if(email && email.length > 0 && password && password.length > 0) {
            await userService.login({ email, password }).then(x=> onClose());
        }
    }

    const formRef = useRef(null);

    return <>
        <ModalWindow
            element={
                <form ref={formRef} className={styles.authBox} >
                    <div className={`${styles.content} vetrino`} >
                        <h2 className={styles.contentTitle}>Увійти</h2>
                        <div className={styles.inputBox}>
                            <CustomInput
                                onChange={changeEmailHandler}
                                className={styles.customInput}
                                customInputContainer={styles.customInputContainer}
                                placeholder={"Email"}
                                type={"email"}
                                required={true}
                                formRef={formRef}
                                name={"LoginEmail"}
                                value={email}
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <CustomPasswordInput
                                onChange={changePasswordHandler}
                                className={styles.customInput}
                                placeholder={"Пароль"}
                                formRef={formRef}
                                name={"LoginPassword"}
                                value={password}
                                customInputContainer={styles.customInputContainer}
                            />
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

                </form>
            }
            isOpen={isOpen}
            onClose={onClose}
            styles={{
                bgColor:'var(--main-bg)',
                width: '609px',
                height: '480px',
                border: '2px solid var(--beige, #FFEDE4);',
                overlayBgColor: 'none'}}
            className={styles.modalData}
        />
    </>
}

export default LoginModal;
