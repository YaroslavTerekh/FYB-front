import React, { useEffect, useState } from 'react';
import styles from './CustomInput.module.css';
import PropTypes from 'prop-types';
import { InputValidation } from '../helpers/input-validator';

const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomTextArea = ({ onChange, className, placeholder, required,  customInputContainer, value, formRef, name}) => {

    const { inputValidator } = InputValidation(formRef)

    const [inputIsValue, setInputIsValue] = useState(false);

    useEffect(() => {
        if (value) {
            setInputIsValue(true);
        } else {
            setInputIsValue(false);
        }
    }, [value]);

    const mainStyles = customInputContainer ?? styles.customInputContainer;
    const errorStyles = mainStyles + " " + styles.inputError;

    return (
        <div className={(required && inputIsValue) ? mainStyles : errorStyles }>
            <textarea
                required={required}
                onChange={onChange}
                className={className}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};

CustomTextArea.propTypes = {
    // options: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         value: PropTypes.string.isRequired,
    //         label: PropTypes.string.isRequired,
    //         isPurchased: PropTypes.bool,
    //     })
    // ).isRequired,
    // onChange: PropTypes.func.isRequired,
};

export default CustomTextArea;
