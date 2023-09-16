import React, { useState } from 'react';
import CustomInput from '../../../components/Input/CustomInput';
import CustomPasswordInput from '../../../components/Input/CustomPasswordInput';
import ModalWindow from '../../../components/Modal/ModalWindow';
import styles from '../Auth.module.css';
import closeIcon from '../../../img/components/icon8.png';
import Button from '../../../components/Button/Button';
import AuthService from '../../../services/auth-service';

const ConfirmPhoneNumber = ({ isOpen, onClose, setRegistrationFinished }) => {
    const userService = new AuthService();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function changeNameHandler(e) {
        setName(e?.target?.value);
    }

    async function register() {
        const isSuccess = await userService.register({ email, password, firstName: name, phoneNumber: phone });

        setRegistrationFinished(isSuccess);
    }

    return <>
        <section className={styles.confNum} >
            <div className={`${styles.content} vetrino`} >
                <p className={styles.text}>
                    Ми надіслаи код-підтвердження на Ваш номер телефону, будь ласка, введіть його в поле нижче:
                </p>
                <div className={styles.inputBox}>
                    <CustomInput onChange={changeNameHandler} className={styles.customInput} placeholder={"Ім'я"} type={"text"} required={true}/>
                    <Button
                        className={styles.btn}
                        aria-expanded={true}
                        aria-controls={`example-panel-`}
                        onClick={register}
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
