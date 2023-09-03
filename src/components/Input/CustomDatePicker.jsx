import React, { useState } from 'react';
import styles from './CustomInput.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomDatePicker = ({ onChange, className, placeholder, required,  customInputContainer, icon, value}) => {
    const [startDate, setStartDate] = useState(value ?? new Date());

    function onChangeHandler(date) {

        setStartDate(date);
        onChange(date)
    }

    return (
        <div className={customInputContainer ?? styles.customInputContainer}>
            <DatePicker
                className={className}
                selected={startDate}
                onChange={(date) => onChangeHandler(date)}
                placeholderText={placeholder}
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

CustomDatePicker.propTypes = {
    // options: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         value: PropTypes.string.isRequired,
    //         label: PropTypes.string.isRequired,
    //         isPurchased: PropTypes.bool,
    //     })
    // ).isRequired,
    // onChange: PropTypes.func.isRequired,
};

export default CustomDatePicker;
