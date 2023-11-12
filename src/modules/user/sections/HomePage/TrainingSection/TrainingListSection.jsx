import React, { useEffect, useState } from 'react';

import TrainingCard from './components/TrainingCard/TrainingCard';

import { GetTrainingIconHelper, MOCKED_TRAININGS_LIST } from './constants';

import './TrainingListSection.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCoachingHelper, getFoodHelper } from '../../../../../context/content-context/content-context.helper';
import { PurchaseProductTypeCoaching, PurchaseProductTypeFood } from '../../../../../constants/roles';

const TrainingListSection = () =>  {
    const dispatch = useDispatch();
    const currentContentState = useSelector(state => state.content);
    const [list, setList] = useState([]);
    const [food, setFood] = useState([]);

    useEffect(() => {
        getCoachingHelper(dispatch);
        getFoodHelper(dispatch);
    }, []);

    useEffect(() => {

        if (currentContentState.coaching) {
            setList(currentContentState.coaching);
        }

    }, [currentContentState.coaching]);

    // useEffect(() => {
    //
    //     let x = 0
    //     const data = list;
    //     for (let i = 0; i < data.length; i++) {
    //
    //         if(x === 4) {
    //             x = 0
    //         }
    //
    //         data[i].icon = x;
    //         x++;
    //     }
    //
    //     if(data.length > 0) {
    //         setList(data);
    //     }
    //
    // }, [list]);

    useEffect(() => {

        if (currentContentState.food) {
            setFood(currentContentState.food);
        }

    }, [currentContentState.food]);

    return (
        <section id='training' className='training'>
            <div className='container'>
                <div className='training__title tlt vetrino'>
                    <h2>Тренування</h2>
                </div>
                {list.map((training, index) => (
                    <TrainingCard key={index} {...training} isFood={false} purchaseProductType={PurchaseProductTypeCoaching}/>
                ))}
                {food.map((training, index) => (
                    <TrainingCard key={index+"f"} {...training} isFood={true}  purchaseProductType={PurchaseProductTypeFood}/>
                ))}
            </div>
        </section>
    );
}

export default TrainingListSection;
