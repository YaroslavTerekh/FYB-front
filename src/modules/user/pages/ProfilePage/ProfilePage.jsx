import React, { useState } from 'react';

import VideoTrainingsSection from '../../sections/ProfilePage/VideoTrainingsSection/VideoTrainingsSection';
import TrainingCarouselSection from '../../sections/ProfilePage/TrainingCarouselSection/TrainingCarouselSection';

import { MOCKED_TRAININGS_DATA, MOCKED_TRAININGS_TYPES } from './constants';

import './ProfilePage.css';
import styles from '../../sections/ProfilePage/VideoTrainingsSection/VideoTrainingsSection.module.css';
import Select from '../../../../components/Select/Select';
import FoodSection from '../../sections/ProfilePage/FoodSection/FoodSection';

const ProfilePage = () => {
    const [selectedTrainingType, setSelectedTrainingType] = useState(
        MOCKED_TRAININGS_DATA[MOCKED_TRAININGS_TYPES.healthy_diet]
    );

    const handleSelectChange = ({ value, label }) => {
        setSelectedTrainingType(value);
    };

    // Filtered MOCKED_TRAININGS_DATA without selectedTrainingType
    const { [selectedTrainingType]: _, ...filteredTrainingData } =
        MOCKED_TRAININGS_DATA;

    const formatSelectOptions = (options) =>
        Object.entries(options).map(([itemType, itemData]) => ({
            value: itemData,
            label: itemData.title,
            isPurchased: itemData.isPurchased,
            isFood: itemData?.isFood
        }))

    return (
        <>
            {/*<div className='profile'>*/}
            {/*    /!* Place any other components related to user account here *!/*/}
            {/*</div>*/}

            <div
                className={`videoTrainingsButton ${styles.videoTrainingsButton}`}
            >
                <Select
                    className={styles.videoTrainingsSelectCustom}
                    options={formatSelectOptions(MOCKED_TRAININGS_DATA)}
                    selectedOptionValue={selectedTrainingType}
                    onChange={handleSelectChange}
                />
            </div>

            { (selectedTrainingType && selectedTrainingType.isFood)
                ?   <FoodSection  selectedTrainingType={selectedTrainingType} filteredTrainingData={filteredTrainingData}/>
                :   <VideoTrainingsSection
                        selectedTrainingType={selectedTrainingType}
                        handleSelectChange={handleSelectChange}
                    />
            }
            <TrainingCarouselSection
                filteredTrainingData={filteredTrainingData}
            />
        </>
    );
};

export default ProfilePage;
