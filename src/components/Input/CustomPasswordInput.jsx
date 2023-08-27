import React, { useState } from 'react';
import styles from './CustomInput.module.css';
import PropTypes from 'prop-types';
import eye from '../../img/components/eye.png';
import eyeOff from '../../img/components/eyeOff.png';

const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomPasswordInput = ({ onChange, className, placeholder }) => {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };

    return (
        <div className={styles.customInputContainer}>
            <input
                onChange={onChange}
                className={styles.customInput}
                type={isPasswordVisible ? 'text' : 'password'} // Toggle input type
                placeholder={placeholder}
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

CustomPasswordInput.propTypes = {
    // options: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         value: PropTypes.string.isRequired,
    //         label: PropTypes.string.isRequired,
    //         isPurchased: PropTypes.bool,
    //     })
    // ).isRequired,
    // onChange: PropTypes.func.isRequired,
};

export default CustomPasswordInput;
