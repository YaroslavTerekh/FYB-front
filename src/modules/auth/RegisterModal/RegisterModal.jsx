import React, { useRef, useState } from 'react';
import CustomInput from '../../../components/Input/CustomInput';
import CustomPasswordInput from '../../../components/Input/CustomPasswordInput';
import ModalWindow from '../../../components/Modal/ModalWindow';
import styles from '../Auth.module.css';
import closeIcon from '../../../img/components/icon8.png';
import Button from '../../../components/Button/Button';
import AuthService from '../../../services/auth-service';

const RegisterModal = ({ isOpen, onClose, setRegistrationFinished }) => {
    const userService = new AuthService();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function changeNameHandler(e) {
        setName(e?.target?.value);
    }

    function changePhoneHandler(e) {
        setPhone(e?.target?.value);
    }

    function changeEmailHandler(e) {
        setEmail(e?.target?.value);
    }

    function changePasswordHandler(e) {
        setPassword(e?.target?.value);
    }

    async function register() {
        const isSuccess = await userService.register(
            {
                email,
                password,
                firstName: name,
                phoneNumber: phone })
            .then(x=> {
                setRegistrationFinished(x);
                onClose();
            });


    }

    const formRef = useRef(null);

    return <>
        <ModalWindow
            element={
                <form ref={formRef} className={styles.authBox} >
                    <div className={`${styles.content} vetrino`} >
                        <h2 className={styles.contentTitleR}>Реєстрація</h2>
                        <div className={styles.inputBox}>
                            <CustomInput
                                onChange={changeNameHandler}
                                className={styles.customInput}
                                placeholder={"Ім'я"}
                                type={"text"}
                                required={true}
                                formRef={formRef}
                                name={"RegisterName"}
                                value={name}
                                customInputContainer={styles.customInputContainer}
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <CustomInput
                                onChange={changePhoneHandler}
                                className={styles.customInput}
                                placeholder={"Телефон"}
                                type={"tel"}
                                required={true}
                                formRef={formRef}
                                name={"RegisterPhone"}
                                value={phone}
                                customInputContainer={styles.customInputContainer}
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <CustomInput
                                onChange={changeEmailHandler}
                                className={styles.customInput}
                                placeholder={"Email"}
                                type={"email"}
                                required={true}
                                formRef={formRef}
                                name={"RegisterEmail"}
                                value={email}
                                customInputContainer={styles.customInputContainer}
                            />
                        </div>
                        <div className=''>
                            <CustomPasswordInput
                                onChange={changePasswordHandler}
                                className={""}
                                placeholder={"Пароль"}
                                required={true}
                                formRef={formRef}
                                name={"RegisterPassword"}
                                value={password}
                                customInputContainer={styles.customInputContainer}
                            />
                        </div>
                        <Button
                            className={styles.btn}
                            aria-expanded={true}
                            aria-controls={`example-panel-`}
                            onClick={register}
                        >
                            <p>Далі</p>
                        </Button>
                    </div>
                </form>
            }
            isOpen={isOpen}
            onClose={onClose}
            styles={{ bgColor:'var(--main-bg)', width: '609px', height: '480px', border: '2px solid var(--beige, #FFEDE4);', overlayBgColor: 'none' }}
            className={styles.modalData}
        />


    </>
}

export default RegisterModal;
