import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';

import Button from '../../../../../components/Button/Button';

import { MOCKED_FAQ_DATA } from './constants';

import './FAQSectorSection.css';

import faqIcon from './images/icon1.png';

const FAQSection = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleToggle = (index) => {
        setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === index ? null : index
        );
    };

    return (
        <section id='FAQ' className='faq'>
            <div className='container'>
                <div className='faq__title tlt vetrino'>
                    <h2>FAQ</h2>
                </div>
                <div className='faq__block'>
                    {MOCKED_FAQ_DATA.map((faqItem, index) => (
                        <div className='block-main' key={index}>
                            <Button
                                className='block-main__question'
                                aria-expanded={selectedItem === index}
                                aria-controls={`example-panel-${index}`}
                                onClick={() => handleToggle(index)}
                            >
                                <span>{faqItem.question}</span>
                                <img
                                    className={
                                        selectedItem === index ? 'active' : ''
                                    }
                                    src={faqIcon}
                                    alt={`FAQ Toggle ${index}`}
                                />
                            </Button>
                            <AnimateHeight
                                id={`example-panel-${index}`}
                                duration={500}
                                height={selectedItem === index ? 'auto' : 0}
                                className='block-main__answer'
                            >
                                <p>{faqItem.answer}</p>
                            </AnimateHeight>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
