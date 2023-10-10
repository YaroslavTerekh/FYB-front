import React, { useEffect, useState } from 'react';
import ReviewsSection from '../../sections/HomePage/ReviewsSection/ReviewsSection';
import TrainingCarouselSection from '../../sections/ProfilePage/TrainingCarouselSection/TrainingCarouselSection';

import { MOCKED_TRAININGS_DATA } from '../ProfilePage/constants';
import TrainingDetailsContent from '../../sections/TainingDetailsContent/TainingDetailsContent';
import FoodDetailsContent from '../../sections/TainingDetailsContent/FoodDetailsContent';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoachingHelper, getFoodHelper } from '../../../../context/content-context/content-context.helper';

const FoodDetailsPage = () => {
    const dispatch = useDispatch();
    const [selectedTrainingType] = useState(MOCKED_TRAININGS_DATA);
    const { id } = useParams();

    const currentContentState = useSelector(state => state.content);
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {

        if (!currentContentState.food || currentContentState?.food?.length === 0) {
            getFoodHelper(dispatch);
        }

    }, []);

    useEffect(() => {
        if(id) {
            const item = currentContentState.food.find(x => x.id === id);

            setSelectedItem(item);
        }
    }, [id, currentContentState.food]);

    const { [selectedTrainingType]: _, ...filteredTrainingData } = MOCKED_TRAININGS_DATA;

    return (
        <>
            {selectedItem && <FoodDetailsContent training={selectedItem}/>}
            <ReviewsSection />
            <TrainingCarouselSection
                filteredTrainingData={filteredTrainingData}
            />
        </>
    );
};

export default FoodDetailsPage;
