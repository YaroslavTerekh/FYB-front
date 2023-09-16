import React, { useState } from 'react';
import styles from './TrainingDetailsContent.module.css';
import Button from '../../../../components/Button/Button';
import trainingIcon from '../../../../img/components/icon10.svg';
import trainingTimeIcon from '../../../../img/components/icon4.svg';
import { GetIconHelper } from '../../../../constants/icons-const';

const FoodDetailsContent = (props: { training: null }) => {

    return (
        <>
            <div className=' vetrino'>
                <div className={styles.navigation}></div>
                <div className={styles.box}>
                    <div className={styles.headerBlock}>
                        <div className={styles.titlePhotos}>
                            { props.training.examplePhotos &&
                                <div className={styles.titleGrid}>
                                    <div className={styles.titleGridItem}>
                                        <div className={styles.gridImgBox}>
                                            <img src={props.training.examplePhotos[0]} alt='' />
                                        </div>
                                    </div>
                                    <div className={styles.titleGridItem}>
                                        <div className={styles.gridImgBox}>
                                            <img src={props.training.examplePhotos[1]} alt='' />
                                        </div>
                                    </div>
                                    <div className={styles.titleGridItem}>
                                        <div className={styles.infoBlock}>
                                            <h3 className={styles.header}>
                                                {props.training.title}
                                            </h3>
                                            <p className={styles.subText}>
                                                {props.training.subtitle}
                                            </p>

                                            <div className={styles.trainingPeriod}>
                                                <div className={styles.data}>
                                                    <img src={trainingTimeIcon} alt='' />
                                                    <p>Раціон на {props.training.count} днів</p>
                                                </div>
                                            </div>

                                            <h3 className={styles.price}>
                                                {props.training.price}
                                            </h3>

                                            <Button
                                                className={styles.btn}
                                                aria-expanded={true}
                                                aria-controls={`coach-modal`}
                                                onClick={() => {}}
                                            >
                                                <p>Купити</p>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                    <div className={styles.trainingDetailsBlock}>
                        <div className={styles.trainingDetailsList}>
                            { props.training.coachingDetails && props.training.coachingDetails.map(d =>
                                <div className={styles.trainingDetailsItem}>
                                    <h4>{d.title}</h4>

                                    { d.details && d.details.map(details =>
                                        <div className={styles.detailsData}>
                                            <p>{details.detail}</p>
                                        </div>
                                    ) }
                                </div>
                            ) }
                        </div>
                    </div>
                    <div className={styles.photosGrid}>
                        { props.training.examplePhotos && props.training.examplePhotos.map((x, i) =>
                            <div className={styles.gridItem}>
                                <div className={styles.gridImgBox}>
                                    <img src={x} alt='' />
                                </div>
                            </div>
                        ) }
                    </div>

                    <Button
                        className={styles.btn}
                        aria-expanded={true}
                        aria-controls={`coach-modal`}
                        onClick={() => {}}
                    >
                        <p>Купити</p>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default FoodDetailsContent;
