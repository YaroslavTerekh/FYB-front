import React from 'react';
import styles from './CustomInput.module.css';
import PropTypes from 'prop-types';

const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomTextArea = ({ onChange, className, placeholder, required,  customInputContainer, value}) => {
    return (
        <div className={customInputContainer ?? styles.customInputContainer}>
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
