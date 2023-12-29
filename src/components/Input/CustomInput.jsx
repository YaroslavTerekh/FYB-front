import React, { useEffect, useState } from 'react';
import styles from './CustomInput.module.css';
import { InputValidation } from '../helpers/input-validator';
import PropTypes from 'prop-types';

const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomInput = ({
         onChange,
         className,
         placeholder,
         type,
         required,
         customInputContainer,
         icon,
         value,
         formRef,
         name
}) => {

    const { inputValidator } = InputValidation(formRef)
    const [inputIsValue, setInputIsValue] = useState(false);

    useEffect(() => {
       if (value) {
           setInputIsValue(true);
       } else {
           setInputIsValue(false);
       }

       if (type === "number" && (+value === 0 || +value <= 0)) {
           setInputIsValue(false);
       } else if (type === "tel") {
           let phoneRegex = /^[+]?\d{10}$/;

           if (phoneRegex.test(value)) {
               setInputIsValue(true);
           } else {
               setInputIsValue(false);
           }
       }

    }, [value, type]);

    const mainStyles = `${styles.customInputContainer} ${customInputContainer} `;
    const errorStyles = mainStyles + " " + styles.inputError;

    return (
        <div className={(inputValidator(name) && inputIsValue) ? mainStyles : errorStyles }>
            <input
                required={required}
                onChange={onChange}
                className={className}
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
            />
            { icon &&
                <span
                    className={styles.passwordIconBox}
                >
                     <img src={icon}/>
                </span>
            }
        </div>
    );
};

CustomInput.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            formRef: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CustomInput;
