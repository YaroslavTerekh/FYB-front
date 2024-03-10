import React, { useState, useEffect } from 'react';
import styles from './FoodSection.module.css';
import AnimateHeight from 'react-animate-height';
import dropDown from '../../../../../img/components/iconDownArrowBold.svg';
import Button from '../../../../../components/Button/Button';
import faqIcon from '../../HomePage/FAQSection/images/icon1.png';
import { useDispatch } from 'react-redux';
import { removeUserSpinner, setUserSpinner } from '../../../../../context/spinner-context/spinner-actions';

const FoodSection = ({ selectedTrainingType, handleSelectChange }) => {
    const [selectedCookingItem, setSelectedCookingItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedFood, setSelectedFood] = useState("1");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserSpinner());
        window.scrollTo(0, 0);

        if(selectedTrainingType?.id) {
            const timer = setTimeout(() => {
                dispatch(removeUserSpinner());
                clearTimeout(timer);
            }, 1000);
        }

    }, [selectedTrainingType]);


    useEffect(() => {
        if(selectedTrainingType.foodPoints && selectedTrainingType.foodPoints.length > 0 ) {
            let imagePath = 0;

            let newFoodData = JSON.parse(JSON.stringify(selectedTrainingType));

            newFoodData?.foodPoints.forEach((data, i) => {
                if(i === 3 || i === 7 || ( i % 10  === 3) || ( i % 10  === 7)) {
                    if(imagePath === 7) {
                        imagePath = 0;
                    }
                    data.additionalImagePath = newFoodData?.photos?.[imagePath]?.filePath;
                    imagePath++;
                }
            });

            setSelectedFood(newFoodData);
        }
    }, [selectedTrainingType]);

    function onCookingMethodClickHandler(id: string) {
        setSelectedCookingItem((prevSelectedItem) =>
        prevSelectedItem === id ? null : id);
    }

    function handleToggle(id: string) {
        setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === id ? null : id);
    }

    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const createMarkup = (e:string) => {
        return { __html: e };
    };


    return (
        <section className={styles.videoTrainings}>
            <div className={styles.container}>

                <div className={styles.foodItems}>

                    { selectedFood.foodPoints && selectedFood.foodPoints.map((data, i) =>

                        <>
                            { (i === 3 || i === 7 || ( i % 10  === 3) || ( i % 10  === 7)) &&
                                <div
                                    className={selectedCookingItem === "1" ? styles.foodItem + " " + styles.p0 + " " + styles.autoH : styles.foodItem + " " + styles.p0}>

                                    {
                                        <img src={data?.additionalImagePath}/>
                                    }
                                </div>
                            }
                        <div
                            className={selectedCookingItem === "1" ? styles.foodItem + " " + styles.autoH : styles.foodItem}>
                            <div className={styles.mainTitle}>
                                <h3 className={styles.day}>{data?.title}</h3>
                                <Button
                                    className={`block-main__question ${styles.mainBtn} ${ width <= 799 ? '' : styles.arrowHidden}`}
                                    aria-expanded={selectedItem === data?.id}
                                    aria-controls={`example-panel-${data?.id}`}
                                    onClick={() => handleToggle(data?.id)}
                                >
                                    <img
                                        className={
                                            selectedItem === data?.id ? 'active' : ''
                                        }
                                        src={faqIcon}
                                        alt={`Toggle ${data?.id}`}
                                    />
                                </Button>
                            </div>
                            <AnimateHeight
                                id={`example-panel-${data?.id}`}
                                duration={500}
                                height={selectedItem === data?.id ? 'auto' : 0}
                                className={width <= 799 ? '' : styles.panelExpanded}
                            >
                                <div className={styles.panelExpandedData}>
                                    <div
                                        className={selectedCookingItem === "1" ? styles.pointList + " " + styles.autoH : styles.pointList}>

                                        <div className={styles.foodPoint}>
                                            <div className={styles.foodBody}>
                                                <div className={styles.foodText}>
                                                    <div dangerouslySetInnerHTML={createMarkup(data?.description)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.coockingMethod}>
                                        <p className={styles.coockingMethodBtn}
                                           onClick={() => onCookingMethodClickHandler(data?.id)}>
                                            <p>Спосіб приготування</p>
                                            <img className={selectedCookingItem === data.id ? styles.active : ''}
                                                 src={dropDown} alt='' />
                                        </p>

                                        <AnimateHeight
                                            id={`example-panel-`}
                                            duration={500}
                                            height={selectedCookingItem === data.id ? 'auto' : 0}
                                            className={styles.coockingMethodText}
                                        >
                                            <div className=''>
                                                <div className={styles.foodText}>
                                                    <div dangerouslySetInnerHTML={createMarkup(data?.coockingMethod)} />
                                                </div>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                            </AnimateHeight>
                        </div>
                        </>
                    )}
                </div>

            </div>
        </section>
    );
};

export default FoodSection;
