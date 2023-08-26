import React from 'react';
import PropTypes from 'prop-types';

import reviewsArrow from './images/icon4.png';

const ReviewsCarouselArrow = ({ className, style, onClick, direction }) => (
    <img
        className={className}
        src={reviewsArrow}
        alt={`${direction} Arrow`}
        style={{
            ...style,
            display: 'block',
            width: 'auto',
            height: 'auto',
            transform: direction === 'prev' ? 'rotate(180deg)' : 'none',
        }}
        onClick={onClick}
    />
);

ReviewsCarouselArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    direction: PropTypes.oneOf(['next', 'prev']),
};

export default ReviewsCarouselArrow;
