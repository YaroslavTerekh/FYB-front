import React, { useState, useRef, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';

import Button from '../../../../../../../components/Button/Button';

import { BEFORE_AFTER_PHOTOS } from '../../constants';

import '../../ReviewsSection.css';

import reviewsIconArrow from '../../../../../../../img/components/icon5.png';

const ReviewsAnimateHeight = ({ index }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const containerRef = useRef(null);

    const handleToggle = (index) => {
        setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === index ? null : index
        );
    };

    const handleContainerClick = (event) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target)
        ) {
            setSelectedItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleContainerClick);

        return () => {
            document.removeEventListener('click', handleContainerClick);
        };
    }, []);

    return (
        <div className='detal-spoiler' ref={containerRef}>
            <Button
                className='detal-spoiler__text'
                aria-expanded={selectedItem === index}
                aria-controls={`example-panel-${index}`}
                onClick={() => handleToggle(index)}
            >
                <span>Переглянути фото “До” та “Після”</span>
                <div className='detal-spoiler__img'>
                    <img
                        className={selectedItem === index ? 'active' : ''}
                        src={reviewsIconArrow}
                        alt={`FAQ Toggle ${index}`}
                    />
                </div>
            </Button>
            {selectedItem === index && (
                <AnimateHeight
                    id={`example-panel-${index}`}
                    duration={500}
                    height={'auto'}
                    className='detal-spoiler__photo'
                >
                    <img
                        className={selectedItem === index ? 'active' : ''}
                        src={BEFORE_AFTER_PHOTOS[index]}
                        alt={`Review ${index + 1}`}
                    />
                </AnimateHeight>
            )}
        </div>
    );
};

export default ReviewsAnimateHeight;
