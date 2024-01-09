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
import { useLocation, useNavigate } from 'react-router-dom';
import LoginModal from '../../../auth/LoginModal/LoginModal';
import RegisterModal from '../../../auth/RegisterModal/RegisterModal';
import FinishRegistrationModal from '../../../auth/FinishRegistrationModal/FinishRegistrationModal';
import AuthService from '../../../../services/auth-service';

const FoodDetailsContent = (props: { training: null }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(setUserSpinner());

        window.scrollTo(0, 0);

        if(props?.training && props?.training?.id) {
            const timer = setTimeout(() => {
                dispatch(removeUserSpinner());
                clearTimeout(timer);
            }, 1000);
        }

    }, [props?.training, location.pathname]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    function onModalCloseHandler() {
        setModalIsOpen(false);
    }

    function onLoginCloseModalHandler() {
        setLoginIsOpen(false);
    }

    function onRegisterCloseModalHandler() {
        setRegisterIsOpen(false);
    }

    function onRegisterRequestedModalHandler() {
        setLoginIsOpen(false);
        setRegisterIsOpen(true);
    }

    function onRegisterRequestedModalHandler() {
        setLoginIsOpen(false);
        setRegisterIsOpen(true);
    }

    function onRegisterFinishedModalHandler(value: boolean) {
        setLoginIsOpen(false);
        setRegisterIsOpen(false);
        setFinishRegistrationIsOpen(value);
    }

    function onRegisterFinishedModalCloseHandler() {
        setFinishRegistrationIsOpen(false);
        navigate("/confirm-number");
    }

    const [loginIsOpen, setLoginIsOpen] = useState(false);
    const [registerIsOpen, setRegisterIsOpen] = useState(false);
    const [finishRegistrationIsOpen, setFinishRegistrationIsOpen] = useState(false);

    const navigate = useNavigate();
    const userService = new AuthService();

    return (
        <>
            <LoginModal
                onClose={onLoginCloseModalHandler}
                isOpen={loginIsOpen}
                registerRequested={onRegisterRequestedModalHandler} />
            <RegisterModal
                onClose={onRegisterCloseModalHandler}
                isOpen={registerIsOpen}
                setRegistrationFinished={onRegisterFinishedModalHandler}
            />
            <FinishRegistrationModal
                onClose={onRegisterFinishedModalCloseHandler}
                isOpen={finishRegistrationIsOpen}
            />

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
                                                onClick={() => userService.isAuthorized() ?  setModalIsOpen(true) : setLoginIsOpen(true)}
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
                        onClick={() => userService.isAuthorized() ? setModalIsOpen(true) : setLoginIsOpen(true)}
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
                        onClick={() => userService.isAuthorized() ?  setModalIsOpen(true) : setLoginIsOpen(true)}
                    >
                        <p>Купити</p>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default FoodDetailsContent;
