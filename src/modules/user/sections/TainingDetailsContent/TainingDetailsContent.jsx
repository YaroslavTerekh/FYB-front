import React, { useState } from 'react';
import styles from './TrainingDetailsContent.module.css';
import Button from '../../../../components/Button/Button';
import trainingIcon from '../../../../img/components/icon10.svg';
import trainingTimeIcon from '../../../../img/components/icon4.svg';
import { GetIconHelper } from '../../../../constants/icons-const';

const TrainingDetailsContent = (props: { training: null }) => {

    return (
        <>
            <div className='container vetrino'>
                <div className={styles.navigation}></div>
                <div className={styles.box}>
                    <div className={styles.headerBlock}>
                        <div className={styles.video}>
                            <video controls>
                                <source src="https://www.youtube.com/embed/36YnV9STBqc?si=VccPdjR9MQSlJhw-" type="video/mp4" />
                            </video>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.header}>
                                {props.training.title}
                            </h3>
                            <p className={styles.subText}>
                                {props.training.description}
                            </p>

                            <div className={styles.trainingPeriod}>
                                <div className={styles.data}>
                                    <img src={trainingIcon} alt='' />
                                    <p>{props.training.videos?.length} тренувань</p>
                                </div>
                                <div className={styles.data}>
                                    <img src={trainingTimeIcon} alt='' />
                                    <p>{props.training.accessDays} { props.training.accessDays > 1 ? ' місяці доступу' : 'місяць доступу'}</p>
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
                    <div className={styles.trainingDetailsBlock}>
                        <div className={styles.trainingDetailsList}>
                            { props.training.coachingDetails && props.training.coachingDetails.map(d =>
                                <div className={styles.trainingDetailsItem}>
                                    <h4>{d.title}</h4>

                                    { d.details && d.details.map(details =>
                                        <div className={styles.detailsData}>
                                            <img src={GetIconHelper(details.icon)} alt='' />
                                            <p>{details.detail}</p>
                                        </div>
                                    ) }
                                </div>
                            ) }
                        </div>
                    </div>
                    <div className={styles.photosGrid}>
                        { props.training?.examplePhotos && props.training.examplePhotos.map((x, i) =>
                            <div className={styles.gridItem}>
                                <div className={styles.gridImgBox}>
                                    <img src={x.filePath} alt='' />
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

export default TrainingDetailsContent;
