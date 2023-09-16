import React, { useState, useEffect } from 'react';
import styles from './FoodSection.module.css';
import mainStyles from '../../../../admin/Admin.module.css';
import AnimateHeight from 'react-animate-height';
import dropDown from '../../../../../img/components/iconDownArrowBold.svg';

const FoodSection = ({ selectedTrainingType, handleSelectChange }) => {
    const [selectedItem, setSelectedItem] = useState("1");

    return (
        <section className={styles.videoTrainings}>
            <div className='container'>

                <div className={styles.foodItems}>
                    <div className={selectedItem === "1" ? styles.foodItem + " " + styles.autoH : styles.foodItem}>
                        <h3 className={styles.day}>Day 1</h3>

                        <div className={selectedItem === "1" ? styles.pointList + " " + styles.autoH : styles.pointList}>
                            <div className={styles.foodPoint}>
                                <h3 className={styles.title}>Сніданок: </h3>

                                <div className={styles.foodBody}>
                                    <strong className={styles.foodMass}>30гр</strong>
                                    <div className={styles.foodText}>Омлет з 2-х яєць з сиром, помідором та зеленню</div>
                                </div>

                            </div>
                            <div className={styles.foodPoint}>
                                <h3 className={styles.title}>Сніданок: </h3>

                                <div className={styles.foodBody}>
                                    <strong className={styles.foodMass}>30гр</strong>
                                    <div className={styles.foodText}>Омлет з 2-х яєць з сиром, помідором та зеленню</div>
                                </div>

                            </div><div className={styles.foodPoint}>
                            <h3 className={styles.title}>Сніданок: </h3>

                            <div className={styles.foodBody}>
                                <strong className={styles.foodMass}>30гр</strong>
                                <div className={styles.foodText}>Омлет з 2-х яєць з сиром, помідором та зеленню</div>
                            </div>
                        </div>
                    </div>

                        <div className={styles.coockingMethod}>
                            <div className={styles.coockingMethodBtn}>
                                <p>Спосіб приготування</p>
                                <img src={dropDown} alt='' />
                            </div>

                            <AnimateHeight
                                id={`example-panel-`}
                                duration={500}
                                height={selectedItem === "1" ? 'auto' : 0}
                                className={styles.coockingMethodText}
                            >
                                <div className=''>
                                    <div className={mainStyles.bodyBlock} >
                                        яйце 1 шт, вівсянка 40гр, молоко 50мл.  Сіль за смаком. Смажити на сковороді під кришкою по 3хв з кожного боку. Зверху твердий сир 40гр, помідор, зелень.
                                    </div>
                                </div>
                            </AnimateHeight>
                        </div>
                </div>

                </div>

            </div>
        </section>
    );
};

export default FoodSection;
