import React, { useState } from 'react';

import VideoTrainingsSection from '../../sections/ProfilePage/VideoTrainingsSection/VideoTrainingsSection';
import TrainingCarouselSection from '../../sections/ProfilePage/TrainingCarouselSection/TrainingCarouselSection';

import { MOCKED_TRAININGS_DATA, MOCKED_TRAININGS_TYPES } from './constants';

import './ProfilePage.css';

const ProfilePage = () => {
    const [selectedTrainingType, setSelectedTrainingType] = useState(
        MOCKED_TRAININGS_TYPES.healthy_diet
    );

    const handleSelectChange = ({ value, label }) => {
        setSelectedTrainingType(value);
    };

    // Filtered MOCKED_TRAININGS_DATA without selectedTrainingType
    const { [selectedTrainingType]: _, ...filteredTrainingData } =
        MOCKED_TRAININGS_DATA;

    return (
        <>
            <div className='profile'>
                {/* Place any other components related to user account here */}
            </div>
            <VideoTrainingsSection
                selectedTrainingType={selectedTrainingType}
                handleSelectChange={handleSelectChange}
            />
            <TrainingCarouselSection
                filteredTrainingData={filteredTrainingData}
            />
        </>
    );
};

export default ProfilePage;
