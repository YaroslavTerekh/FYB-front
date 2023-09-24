import React, { useEffect, useState } from 'react';

import TrainerLyda from './components/TrainerLyda';
import TrainerLera from './components/TrainerLera';

import { MOCKED_TRAINERS_DATA } from './constants';

import './TrainerSection.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetImgUrl } from '../../../../../services/images-service';
import { getContentCoachesHelper } from '../../../../../context/content-context/content-context.helper';

const TrainerSection = () => {
    const dispatch = useDispatch();
    const currentContentState = useSelector(state => state.content);
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        getContentCoachesHelper(dispatch);
    }, []);

    useEffect( () => {
        if(currentContentState.coaches && currentContentState.coaches.length > 0) {
            setTrainers(currentContentState.coaches);
        }
    }, [currentContentState.coaches]);

    return (
        <div id='trainers' className='trainer'>
            <div className='container'>
                <div className='trainer__title tlt vetrino'>
                    <h2>Тренери</h2>
                </div>
                <div className='trainer__block'>
                    {/* TODO: It makes sense to make a common component for the trainer */}

                    {/*{ trainers && trainers.map(t =>*/}
                    {/*    <TrainerLyda data={t}/>)*/}
                    {/*}*/}

                    { trainers && trainers.map((t, i) => {
                        return (i % 2 === 0)
                            ? <TrainerLyda data={t} />
                            : <TrainerLyda data={t} />
                    }) }



                </div>
            </div>
        </div>
    )
};

export default TrainerSection;
