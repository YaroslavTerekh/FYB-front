import React, { useEffect, useState } from 'react';
import styles from './TrainingDetailsContent.module.css';
import Button from '../../../../components/Button/Button';
import trainingTimeIcon from '../../../../img/components/icon4.svg';
import BuyAlertModal from '../../buy-modal/BuyAlertModal';
import { PurchaseProductTypeFood } from '../../../../constants/roles';
import {
    removeUserSpinner,
    setUserSpinner,
} from '../../../../context/spinner-context/spinner-actions';
import { useDispatch } from 'react-redux';

const FoodDetailsContent = (props: { training: null }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserSpinner());
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });

        if(props.training && props.training?.id) {
            const timer = setTimeout(() => {


                dispatch(removeUserSpinner());
                clearTimeout(timer);
            }, 1000);
        }

    }, [props?.training]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    function onModalCloseHandler() {
        setModalIsOpen(false);
    }

    return (
        <>
            <BuyAlertModal
                purchaseProductType={PurchaseProductTypeFood}
                onClose={onModalCloseHandler}
                isOpen={modalIsOpen}
                text={"Підвердіть покупку"}
                productId={props.training.id}
            />
            <div className=' vetrino'>
                <div className={styles.navigation}></div>
                <div className={styles.box}>
                    <div className={styles.headerBlock}>
                        <div className={styles.titlePhotos}>
                            { props.training?.photos &&
                                <div className={styles.titleGrid}>
                                    <div className={styles.titleGridItem}>
                                        <div className={styles.gridImgBox}>
                                            <img src={props.training.photos[0]?.filePath} alt='' />
                                        </div>
                                    </div>
                                    <div className={styles.titleGridItem}>
                                        <div className={styles.gridImgBox}>
                                            <img src={props.training.photos[1]?.filePath} alt='' />
                                        </div>
                                    </div>
                                    <div className={styles.titleGridItem}>
                                        <div className={styles.infoBlock}>
                                            <h3 className={styles.header}>
                                                {props.training.title}
                                            </h3>
                                            <p className={styles.subText}>
                                                {props.training.description}
                                            </p>

                                            <div className={styles.trainingPeriodFood}>
                                                <div className={styles.data}>
                                                    <img src={trainingTimeIcon} alt='' />
                                                    <p> Pаціон на кількість днів - {props?.training.foodPoints?.length}</p>
                                                </div>
                                            </div>

                                            <h3 className={styles.price}>
                                                {props.training.price} ГРН
                                            </h3>

                                            <Button
                                                className={styles.btn + " " + styles.hide}
                                                aria-expanded={true}
                                                aria-controls={`coach-modal`}
                                                onClick={() => setModalIsOpen(true)}
                                            >
                                                <p>Купити</p>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>

                    <Button
                        className={styles.btn + " " + styles.hiddenBtn}
                        aria-expanded={true}
                        aria-controls={`coach-modal`}
                        onClick={() => setModalIsOpen(true)}
                    >
                        <p>Купити</p>
                    </Button>

                    <div className={styles.trainingDetailsBlock}>
                        <div className={styles.trainingDetailsList}>
                            { props.training.foodDetails && props.training.foodDetails.map(d =>
                                <div className={styles.trainingDetailsItem}>
                                    <h4>{d.title}</h4>

                                    <div className={styles.detailsData}>
                                        <p>{d.detail}</p>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </div>
                    <div className={styles.photosGrid}>
                        <div className={styles.gridItem}>
                            <div className={styles.gridImgBox}>
                                { props.training?.photos?.[2]?.filePath &&
                                    <img src={props.training?.photos[2]?.filePath} alt='' />
                                }
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <div className={styles.gridImgBox}>
                                { props.training?.photos?.[3]?.filePath  &&
                                    <img src={props.training?.photos[3]?.filePath} alt='' />
                                }
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <div className={styles.gridImgBox}>
                                { props.training?.photos?.[4]?.filePath &&
                                    <img src={props.training?.photos[4]?.filePath} alt='' />
                                }
                            </div>
                        </div>
                        <div className={styles.gridItem}>
                            <div className={styles.gridImgBox}>
                                { props.training?.photos?.[5]?.filePath &&
                                        <img src={props.training?.photos[5]?.filePath} alt='' />
                                }
                            </div>
                        </div>
                    </div>

                    <Button
                        className={styles.btn}
                        aria-expanded={true}
                        aria-controls={`coach-modal`}
                        onClick={() => setModalIsOpen(true)}
                    >
                        <p>Купити</p>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default FoodDetailsContent;
