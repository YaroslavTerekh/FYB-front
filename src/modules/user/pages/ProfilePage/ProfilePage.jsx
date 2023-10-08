import React, { useEffect, useState } from 'react';

import VideoTrainingsSection from '../../sections/ProfilePage/VideoTrainingsSection/VideoTrainingsSection';
import TrainingCarouselSection from '../../sections/ProfilePage/TrainingCarouselSection/TrainingCarouselSection';

import { MOCKED_TRAININGS_DATA, MOCKED_TRAININGS_TYPES } from './constants';

import './ProfilePage.css';
import styles from '../../sections/ProfilePage/VideoTrainingsSection/VideoTrainingsSection.module.css';
import Select from '../../../../components/Select/Select';
import FoodSection from '../../sections/ProfilePage/FoodSection/FoodSection';
import { useDispatch, useSelector } from 'react-redux';
import { getCoachingHelper, getFoodHelper } from '../../../../context/content-context/content-context.helper';

const ProfilePage = () => {
    const [selectedTrainingType, setSelectedTrainingType] = useState();

    useEffect(() => {
        getCoachingHelper(dispatch);
        getFoodHelper(dispatch);
    }, []);

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
        if (currentContentState.coaching || currentContentState.food) {
            setList(currentContentState.coaching ?? []);
            setFoodList(currentContentState.food ?? []);

            if(currentContentState.coaching && currentContentState.coaching.length > 0) {
                const data = formatSelectOptions(currentContentState.coaching, currentContentState.food);
                setSelectedTrainingType(data[0].value);
            }
        }
    }, [currentContentState.coaching, currentContentState.food]);

    const formatSelectOptions = (coaching, food) => {
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

            { (selectedTrainingType && selectedTrainingType?.foodDetails)
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
