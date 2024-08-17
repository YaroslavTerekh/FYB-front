import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', className, onClick, children, disabled }) => (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
        {children}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
