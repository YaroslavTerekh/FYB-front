import React from 'react';
import styles from './CustomOption.module.css';


const CustomOption = ({ innerProps, isDisabled, label, options, value }) => {
    if (isDisabled) return null;

    return (
        <div className={styles.customOption} {...innerProps}>
            <div className={styles.customOptionLabel}>{label}</div>
        </div>
    );
};

export default CustomOption;
