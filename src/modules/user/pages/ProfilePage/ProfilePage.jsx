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
import BuyAlertModal from '../../buy-modal/BuyAlertModal';
import { PurchaseProductTypeCoaching, PurchaseProductTypeFood } from '../../../../constants/roles';
import Button from '../../../../components/Button/Button';

const ProfilePage = () => {
    const [selectedTrainingType, setSelectedTrainingType] = useState();

    useEffect(() => {
        getCoachingHelper(dispatch);
        getFoodHelper(dispatch);
    }, []);

    const handleSelectChange = ({ value, label }) => {
        debugger
        setSelectedTrainingType(value);
    };

    // Filtered MOCKED_TRAININGS_DATA without selectedTrainingType
    const { [selectedTrainingType]: _, ...filteredTrainingData } =
        MOCKED_TRAININGS_DATA;

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user);
    const currentContentState = useSelector(state => state.content);
    const [list, setList] = useState([]);
    const [food, setFoodList] = useState([]);

    useEffect(() => {
        if (currentContentState.coaching || currentContentState.food) {
            setList(currentContentState.coaching ?? []);
            setFoodList(currentContentState.food ?? []);

            // if(currentContentState.coaching && currentContentState.coaching.length > 0) {
            //     const data = formatSelectOptions(currentContentState.coaching, currentContentState.food);
            //     setSelectedTrainingType(data[0].value);
            // }
        }
    }, [currentContentState.coaching, currentContentState.food]);

    const formatSelectOptions = (coaching, food) => {
        let item1 = Object.entries(coaching).map(([itemType, itemData]) => ({
            value: itemData,
            label: itemData.title,
            isPurchased: !!currentUser?.coachingPurchases?.find(x => x?.id === itemData.id),
            isFood: false
        }));

        if (food) {
            const item2 = Object.entries(food).map(([itemType, itemData]) => ({
                value: itemData,
                label: itemData.title,
                isPurchased: !!currentUser?.foodPurchases?.find(x => x?.id === itemData.id),
                isFood: true
            }));

            item1 = item1.concat(item2)
        }

        return item1;
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    function onModalCloseHandler() {
        setModalIsOpen(false);
    }

    return (
        <>
            <BuyAlertModal
                purchaseProductType={selectedTrainingType?.foodDetails ? PurchaseProductTypeFood :PurchaseProductTypeCoaching}
                onClose={onModalCloseHandler}
                isOpen={modalIsOpen}
                text={"Підвердіть покупку"}
                productId={selectedTrainingType?.id}
            />
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

            { (selectedTrainingType &&
            (!!currentUser?.foodPurchases?.find(x => x?.id === selectedTrainingType?.id)) &&
                selectedTrainingType?.foodDetails)
                ?   <FoodSection  selectedTrainingType={selectedTrainingType} filteredTrainingData={filteredTrainingData}/>
                :

                selectedTrainingType &&
                !!currentUser?.coachingPurchases?.find(x => x?.id === selectedTrainingType?.id)
                    ?  <VideoTrainingsSection
                        selectedTrainingType={selectedTrainingType}
                        handleSelectChange={handleSelectChange}
                    />
                : selectedTrainingType &&
                    !(!!currentUser?.coachingPurchases?.find(x => x?.id === selectedTrainingType?.id) ||
                        !!currentUser?.foodPurchases?.find(x => x?.id === selectedTrainingType?.id)
                    )
                        ? <div className={styles.mainText}>
                            <p>Для перегляду цього тренування, потрібного його придбати</p>
                            <Button
                                className={styles.btn}
                                aria-expanded={true}
                                aria-controls={`coach-modal`}
                                onClick={() => setModalIsOpen(true)}
                            >
                                <p>Купити</p>
                            </Button>
                        </div>
                        : <div className={styles.mainText}>
                        <p>Оберіть потрібне тренування зверху!</p>
                    </div>
            }
            <TrainingCarouselSection
                filteredTrainingData={filteredTrainingData}
            />
        </>
    );
};

export default ProfilePage;
