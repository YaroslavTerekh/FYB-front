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
     name
     }) => {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };

    const { inputValidator } = InputValidation(formRef)
    const [inputIsValue, setInputIsValue] = useState(false);

    useEffect(() => {
        if (value) {
            setInputIsValue(true);
        } else {
            setInputIsValue(false);
        }
    }, [value, isPasswordVisible]);

    const mainStyles = styles.customInputContainer;
    const errorStyles = mainStyles + " " + styles.inputError;

    return (
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
    );
};

export default CustomPasswordInput;
