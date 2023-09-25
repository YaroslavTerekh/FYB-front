import React, { useEffect, useState } from 'react';
import ReviewsSection from '../../sections/HomePage/ReviewsSection/ReviewsSection';
import TrainingCarouselSection from '../../sections/ProfilePage/TrainingCarouselSection/TrainingCarouselSection';

import { MOCKED_TRAININGS_DATA } from '../ProfilePage/constants';
import TrainingDetailsContent from '../../sections/TainingDetailsContent/TainingDetailsContent';
import FoodDetailsContent from '../../sections/TainingDetailsContent/FoodDetailsContent';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
    const [selectedTrainingType] = useState(MOCKED_TRAININGS_DATA);
    const { id } = useParams();

    const currentContentState = useSelector(state => state.content);
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        if(id) {
            const item = currentContentState.coaching.find(x => x.id === id);

            setSelectedItem(item);
        }
    }, [id]);

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
