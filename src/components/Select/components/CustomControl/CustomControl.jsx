import React from 'react';
import PropTypes from 'prop-types';
import  './CustomControl.css'

const CustomControl = ({ children, innerProps, selectProps }) => {
    const customClasses = 'custom-control'; 

    return (
        <div className={customClasses} {...innerProps}>
            {children}
        </div>
    );
};

CustomControl.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
	 selectProps: PropTypes.object,
};

export default CustomControl;

