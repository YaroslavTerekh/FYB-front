import React from 'react';

import whomPhoto from '../../../../../img/photo/photo3.jpg';

import './WhomSection.css';

const WhomSection = () => (
    <div className='whom'>
        <div className='container'>
            <div className='whom__title tlt vetrino'>
                <h2>Для кого</h2>
            </div>
            <div className='whom__info info-whom'>
                <div className='info-whom__text_right text-info'>
                    <div className='text-info__item'>
                        Тільки починаєш свій шлях та знайомишся зі світом
                        тренувань
                    </div>
                    <div className='text-info__item _left'>
                        Хочеш тренуватись в комфортній атмосфері та в своєму
                        темпі
                    </div>
                    <div className='text-info__item'>
                        Тобі не підходить час онлайн тренувань, або ти хочеш
                        тренуватися самостійно
                    </div>
                </div>
                <div className='info-whom__img'>
                    <img src={whomPhoto} alt='Photo' />
                </div>
                <div className='info-whom__text_left text-info'>
                    <div className='text-info__items'>
                        Ти мамуся в декреті та мрієш повернутися до своєї форми
                    </div>
                    <div className='text-info__items _right'>
                        Працюєш 24/7 та абсолютно не маєш часу на похід до
                        спортзалу
                    </div>
                    <div className='text-info__items'>
                        Хочеш уникнути затрат на поїздки, та зекономити час не
                        чекаючи звільнення тренажеру
                    </div>
                </div>
            </div>
            <div className='whom__subtitle vetrino'>
                ДАВАЙ СПРОБУЄМО ПІД НАШИМ НАГЛЯДОМ?
            </div>
        </div>
    </div>
);

export default WhomSection;
