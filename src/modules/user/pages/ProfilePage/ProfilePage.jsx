import React, { useEffect, useState } from 'react';

import VideoTrainingsSection from '../../sections/ProfilePage/VideoTrainingsSection/VideoTrainingsSection';
import TrainingCarouselSection from '../../sections/ProfilePage/TrainingCarouselSection/TrainingCarouselSection';

import { MOCKED_TRAININGS_DATA, MOCKED_TRAININGS_TYPES } from './constants';

import './ProfilePage.css';
import styles from '../../sections/ProfilePage/VideoTrainingsSection/VideoTrainingsSection.module.css';
import Select from '../../../../components/Select/Select';
import FoodSection from '../../sections/ProfilePage/FoodSection/FoodSection';
import { useDispatch, useSelector } from 'react-redux';

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

    const dispatch = useDispatch();
    const currentContentState = useSelector(state => state.content);
    const [list, setList] = useState([]);
    const [food, setFoodList] = useState([]);

    useEffect(() => {
        if (currentContentState.coaching) {
            setList(currentContentState.coaching);
        }
    }, [currentContentState.coaching]);

    useEffect(() => {
        if (currentContentState.food) {
            setFoodList(currentContentState.food);
        }
    }, [currentContentState.food]);

    const formatSelectOptions = (coaching, food) => {
        let res = [];
        let item1 = Object.entries(coaching).map(([itemType, itemData]) => ({
            value: itemData,
            label: itemData.title,
            isPurchased: true,
            isFood: false
        }));

        if (food) {
            const item2 = Object.entries(food).map(([itemType, itemData]) => ({
                value: itemData,
                label: itemData.title,
                isPurchased: true,
                isFood: true
            }));

            item1 = item1.concat(item2)
        }

        return item1;
    }

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
                    options={formatSelectOptions(list, food)}
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
