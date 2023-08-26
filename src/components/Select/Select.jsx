import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';


import styles from './Select.module.css';
import CustomOption from './components/CustomOption/CustomOption';
import CustomDropdownArrow from './components/CustomDropdownArrow/CustomDropdownArrow';
import CustomControl from './components/CustomControl/CustomControl';

const customStyles = {
    control: () => ({}),
    option: () => ({}),
};

const CustomSelect = ({ options = [], onChange, className }) => {
    return (
        <div className={styles.customSelectContainer}>
            <Select
                className={className}
                defaultValue={options[0]}
                name='video-trainings'
                options={options}
                onChange={onChange}
                components={{
						Control: (props) => <CustomControl {...props} selectProps={props.selectProps} />,
                    Option: CustomOption,
                    DropdownIndicator: CustomDropdownArrow,
                }}
                styles={customStyles}
            />
        </div>
    );
};

CustomSelect.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            isPurchased: PropTypes.bool,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
