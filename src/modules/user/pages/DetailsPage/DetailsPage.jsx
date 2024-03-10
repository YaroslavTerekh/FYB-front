import React, { useEffect, useState } from 'react';
import ReviewsSection from '../../sections/HomePage/ReviewsSection/ReviewsSection';
import TrainingCarouselSection from '../../sections/ProfilePage/TrainingCarouselSection/TrainingCarouselSection';

import { MOCKED_TRAININGS_DATA } from '../ProfilePage/constants';
import TrainingDetailsContent from '../../sections/TainingDetailsContent/TainingDetailsContent';
import FoodDetailsContent from '../../sections/TainingDetailsContent/FoodDetailsContent';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoachingHelper, getFoodHelper } from '../../../../context/content-context/content-context.helper';
import { removeUserSpinner, setUserSpinner } from '../../../../context/spinner-context/spinner-actions';

const DetailsPage = () => {
    const dispatch = useDispatch();
    const [selectedTrainingType] = useState(MOCKED_TRAININGS_DATA);
    const { id } = useParams();

    const currentContentState = useSelector(state => state.content);
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {

        if (!currentContentState.coaching || currentContentState?.coaching?.length === 0) {
            getCoachingHelper(dispatch);
        }

    }, []);

    useEffect(() => {
        if(id) {
            const item = currentContentState.coaching.find(x => x.id === id);

            setSelectedItem(item);
        }
    }, [id, currentContentState?.coaching]);

    const { [selectedTrainingType]: _, ...filteredTrainingData } = MOCKED_TRAININGS_DATA;
    return (
        <>
            {selectedItem && <TrainingDetailsContent training={selectedItem}/> }
            {/*<FoodDetailsContent training={filteredTrainingData.healthy_diet}/>*/}

            <ReviewsSection />
            <TrainingCarouselSection
                filteredTrainingData={filteredTrainingData}
            />
        </>
    );
};

export default DetailsPage;
