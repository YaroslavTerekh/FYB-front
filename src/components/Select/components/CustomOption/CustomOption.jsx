import React from 'react';

import styles from './CustomOption.module.css';

import iconBlock from '../../../../img/components/icon1.png'


const CustomOption = ({ innerProps, isDisabled, label, options, value }) => {
    const currentOption = options.find((option) => option.value === value);

    if (isDisabled) return null;

    return (
        <div className={styles.customOption} {...innerProps}>
            <div className={styles.customOptionLabel}>{label}</div>
            {!currentOption.isPurchased && <img src={iconBlock} className={styles.CustomOptionArrow}/>}
        </div>
    );
};

export default CustomOption;
