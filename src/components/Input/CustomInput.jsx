import React from 'react';
import styles from './CustomInput.module.css';
import PropTypes from 'prop-types';

const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomInput = ({ onChange, className, placeholder, type, required }) => {
    return (
        <div className={styles.customInputContainer}>
            <input
                required={required}
                onChange={onChange}
                className={styles.customInput}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
};

CustomInput.propTypes = {
    // options: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         value: PropTypes.string.isRequired,
    //         label: PropTypes.string.isRequired,
    //         isPurchased: PropTypes.bool,
    //     })
    // ).isRequired,
    // onChange: PropTypes.func.isRequired,
};

export default CustomInput;
