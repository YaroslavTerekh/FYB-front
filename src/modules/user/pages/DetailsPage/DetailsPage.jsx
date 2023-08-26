import React, { useState } from 'react';
import ReviewsSection from '../../sections/HomePage/ReviewsSection/ReviewsSection';
import TrainingCarouselSection from '../../sections/ProfilePage/TrainingCarouselSection/TrainingCarouselSection';

import { MOCKED_TRAININGS_DATA } from '../ProfilePage/constants';

const DetailsPage = () => {
    const [selectedTrainingType] = useState(MOCKED_TRAININGS_DATA);

    const { [selectedTrainingType]: _, ...filteredTrainingData } =
        MOCKED_TRAININGS_DATA;
    return (
        <>
            <ReviewsSection />
            <TrainingCarouselSection
                filteredTrainingData={filteredTrainingData}
            />
        </>
    );
};

export default DetailsPage;
