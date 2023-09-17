import React from 'react';
import styles from './CustomSelectChiplets.module.css';
import Select from 'react-select';
import { CSSProperties } from 'react';
import CustomControl from './CustomControl/CustomControl';
import CustomOption from './CustomOption/CustomOption';
import CustomDropdownArrow from './CustomDropdownArrow/CustomDropdownArrow';

const customStyles = {
    control: base => ({
        ...base,
        border: 0,
        // This line disable the blue border
        boxShadow: 'none'
    }),
    option: () => ({
        textAlign: 'center',
        display: 'flex',
        width: '350px',
        padding: '5px 10px',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '0.5px solid #FFEDDB',
        background: '#FFFCF9',
        color: '#000',
        fontSize: '14px',
        cursor: 'pointer'
    }),
};

const CustomSelectChiplets = ({ onChange, options, className, placeholder, required,  customInputContainer, icon, isMulti, selectStyles, isDisabled}) => {
    return (
        <div className={customInputContainer ?? styles.customInputContainer}>
            <Select
                isDisabled={isDisabled}
                className={className}
                // defaultValue={options[0]}
                // name='video-trainings'
                options={options}
                onChange={onChange}
                components={{
                    // Control: (props) => <CustomControl {...props} selectProps={props.selectProps} />,
                    // Option: CustomOption,
                    //  DropdownIndicator: CustomDropdownArrow,
                }}
                isMulti={isMulti}
                placeholder={placeholder}
                styles={selectStyles ?? customStyles}
                required={required}
            />
        </div>
    );
};

CustomSelectChiplets.propTypes = {
    // options: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         value: PropTypes.string.isRequired,
    //         label: PropTypes.string.isRequired,
    //         isPurchased: PropTypes.bool,
    //     })
    // ).isRequired,
    // onChange: PropTypes.func.isRequired,
};

export default CustomSelectChiplets;
