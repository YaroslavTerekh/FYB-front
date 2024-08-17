import React from 'react';

import Button from '../../../../../components/Button/Button';

import photo1 from './images/photo1.png';
import photo2 from './images/photo2.jpg';

import './MainBannerSection.css';

const  MainBannerSection = () => {

    function onBtnClickHandler() {
        const trainingElement = document.getElementById('training');
        if (trainingElement) {
            const elementPosition =
                trainingElement.getBoundingClientRect().top;
            window.scrollBy({
                top: elementPosition - 110,
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    return (
    <section className='main'>
        <div className='container'>
            <div className='main-block'>
                <div className='main-block__text'>
                    <div className='title-main_up vetrino'>
                           Тренування в повному записі,
                    </div>
                    <div className='title-main_down vetrino'>
                        вмикай та повторюй!
                    </div>
                    <div className='text-main__button'>
                        <Button onClick={onBtnClickHandler}>Обрати тренування</Button>
                    </div>
                </div>
                <div className='main-block__img'>
                    <img className='main-block__img1' src={photo1} />
                    <img className='main-block__img2' src={photo2} />
                </div>
            </div>
        </div>
    </section>
)};

export default MainBannerSection;
