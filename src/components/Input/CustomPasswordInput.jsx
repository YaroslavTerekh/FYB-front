import React, { useEffect, useState } from 'react';
import styles from './CustomInput.module.css';
import PropTypes from 'prop-types';
import eye from '../../img/components/eye.png';
import eyeOff from '../../img/components/eyeOff.png';
import { InputValidation } from '../helpers/input-validator';

const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomPasswordInput = ({
     onChange,
     className,
     placeholder,
     value,
     formRef,
     name,
     customInputContainer,
     isValid,
    isRegistr
     }) => {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };

    const { inputValidator } = InputValidation(formRef)
    const [inputIsValue, setInputIsValue] = useState(false);

    useEffect(() => {
        if (value && value?.length > 0 &&
            validatePassword(value)
            && isRegistr
            ) {
            setInputIsValue(true);
            if(isValid ) {
                isValid(true);
            }
        }
        else if(!isRegistr && value && value?.length > 0) {
            setInputIsValue(true);
            if(isValid ) {
                isValid(true);
            }
        }
        else {
            setInputIsValue(false);
            if(isValid) {
                isValid(false);
            }
        }
    }, [value, isPasswordVisible]);

    const validatePassword = (password) => {
        // Define the password requirements
        const minLength = 6;
        const hasNumber = /\d/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!#$]/.test(password);

        // Check if all requirements are met
        return (
            password.length >= minLength &&
            hasNumber &&
            hasUpperCase &&
            hasSpecialChar
        );
    };

    const mainStyles = `${styles.customInputContainer} ${customInputContainer} `;
    const errorStyles = mainStyles + " " + styles.inputError;

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className={(inputValidator(name) && inputIsValue) ? mainStyles : errorStyles }>
                <input
                    onChange={onChange}
                    className={styles.customInput}
                    type={isPasswordVisible ? 'text' : 'password'} // Toggle input type
                    placeholder={placeholder}
                    required={true}
                    name={name}
                />
                <span
                    className={styles.passwordIconBox}
                    onClick={togglePasswordVisibility}
                >
            {isPasswordVisible ? <img src={eye}/> :  <img src={eyeOff}/>}
            </span>

            </div>
            { isRegistr && <div className={styles.errorMessage} style={{width:'70%'}}>
                пароль повинен бути не менше 6 символів, містити цифри, великі літери, та спец знаки (!,#,$)
            </div> }
        </div>
    );
};

export default CustomPasswordInput;
