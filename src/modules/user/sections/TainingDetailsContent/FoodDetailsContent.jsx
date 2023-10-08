import React, { useEffect, useState } from 'react';
import styles from './TrainingDetailsContent.module.css';
import Button from '../../../../components/Button/Button';
import trainingIcon from '../../../../img/components/icon10.svg';
import trainingTimeIcon from '../../../../img/components/icon4.svg';
import { GetIconHelper } from '../../../../constants/icons-const';
import BuyAlertModal from '../../buy-modal/BuyAlertModal';
import { PurchaseProductTypeFood } from '../../../../constants/roles';

const FoodDetailsContent = (props: { training: null }) => {
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

                                            <div className={styles.trainingPeriod}>
                                                <div className={styles.data}>
                                                    <img src={trainingTimeIcon} alt='' />
                                                    <p>Раціон на {props?.training.foodPoints?.length} днів</p>
                                                </div>
                                            </div>

                                            <h3 className={styles.price}>
                                                {props.training.price}
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
                        { props.training.photos && props.training.photos.map((x, i) => {
                                if(i > 1) {
                                    return (<div className={styles.gridItem}>
                                        <div className={styles.gridImgBox}>
                                            <img src={x.filePath} alt='' />
                                        </div>
                                    </div>)
                                }
                            }
                        ) }
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
