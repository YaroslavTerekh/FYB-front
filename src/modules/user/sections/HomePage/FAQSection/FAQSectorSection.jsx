import React, { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';

import Button from '../../../../../components/Button/Button';

import { MOCKED_FAQ_DATA } from './constants';

import './FAQSectorSection.css';

import faqIcon from './images/icon1.png';
import { useDispatch, useSelector } from 'react-redux';
import { getFAQHelper } from '../../../../../context/content-context/content-context.helper';

const FAQSection = () => {
    const dispatch = useDispatch();
    const currentContentState = useSelector(state => state.content);

    const [selectedItem, setSelectedItem] = useState(null);
    const [list, setList] = useState([]);

    useEffect(() => {
        getFAQHelper(dispatch);
    }, []);

    useEffect(() => {
        if (currentContentState.faq && currentContentState.faq.length > 0) {
            setList(currentContentState.faq);
        }
    }, [currentContentState.faq]);

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
                    {list.map((faqItem, index) => (
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
