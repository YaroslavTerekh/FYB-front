import React from 'react';

import TrainingCard from './components/TrainingCard/TrainingCard';

import { MOCKED_TRAININGS_LIST } from './constants';

import './TrainingListSection.css';

const TrainingListSection = () => (
    <section id='training' className='training'>
        <div className='container'>
            <div className='training__title tlt vetrino'>
                <h2>Тренування</h2>
            </div>
            {MOCKED_TRAININGS_LIST.map((training, index) => (
                <TrainingCard key={index} {...training} />
            ))}
        </div>
    </section>
);

export default TrainingListSection;
