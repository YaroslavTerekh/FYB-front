import React from 'react';

import TrainerLyda from './components/TrainerLyda';
import TrainerLera from './components/TrainerLera';

import { MOCKED_TRAINERS_DATA } from './constants';

import './TrainerSection.css';

const TrainerSection = () => (
    <div id='trainers' className='trainer'>
        <div className='container'>
            <div className='trainer__title tlt vetrino'>
                <h2>Тренери</h2>
            </div>
            <div className='trainer__block'>
                {/* TODO: It makes sense to make a common component for the trainer */}
                <TrainerLyda {...MOCKED_TRAINERS_DATA.lyda} />
                <TrainerLera {...MOCKED_TRAINERS_DATA.lera} />
            </div>
        </div>
    </div>
);

export default TrainerSection;
