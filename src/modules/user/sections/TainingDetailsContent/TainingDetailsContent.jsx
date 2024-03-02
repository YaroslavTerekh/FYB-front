import React, { useEffect, useState } from 'react';
import styles from './TrainingDetailsContent.module.css';
import Button from '../../../../components/Button/Button';
import trainingIcon from '../../../../img/components/icon10.svg';
import trainingTimeIcon from '../../../../img/components/icon4.svg';
import { GetIconHelper } from '../../../../constants/icons-const';
import BuyAlertModal from '../../buy-modal/BuyAlertModal';
import { PurchaseProductTypeCoaching } from '../../../../constants/roles';
import { removeUserSpinner, setUserSpinner } from '../../../../context/spinner-context/spinner-actions';
import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginModal from '../../../auth/LoginModal/LoginModal';
import RegisterModal from '../../../auth/RegisterModal/RegisterModal';
import FinishRegistrationModal from '../../../auth/FinishRegistrationModal/FinishRegistrationModal';
import AuthService from '../../../../services/auth-service';

const TrainingDetailsContent = (props: { training: null }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(setUserSpinner());
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            dispatch(removeUserSpinner());
            clearTimeout(timer);
        }, 4000);

    }, []);

    function onModalCloseHandler() {
        setModalIsOpen(false);
    }

    const [video, setVideo] = useState(null);

    useEffect(() => {
        if(props.training) {
            setVideo(props.training?.videos?.find(x => x?.isPreview)?.filePath)
        }
    }, [props.training]);

    const [isLoaded, setIsLoaded] = useState(false);

    const handleCanPlay = () => {
       const timer = setTimeout(() => {
           // The video has loaded and can be played
           setIsLoaded(true);

           // Start playing the video
           if (videoRef.current) {
               videoRef.current.play();
           }

           clearTimeout(timer);

       }, 1000);
    };

    const videoRef = React.createRef();

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
                purchaseProductType={PurchaseProductTypeCoaching}
                onClose={onModalCloseHandler}
                isOpen={modalIsOpen}
                text={"Підвердіть покупку"}
                productId={props.training.id}
            />
            <div className='container vetrino'>
                <div className={styles.navigation}>
                    Головна <span>/</span> {props.training.title}
                </div>
                <div className={styles.box}>
                    <div className={styles.headerBlock}>
                        <div className={styles.video}>
                            {video && (
                                // <video controls muted autoPlay>
                                //     <source src={video} type="video/mp4" />
                                //     Your browser does not support the video tag.
                                // </video>
                                <ReactPlayer url={video} playing={false} loop={true} controls={true} width={'100%'} height={'100%'} />
                            )}
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
                                    <p>{props.training.videos?.filter(x=>!x?.isPreview)?.length} тренувань</p>
                                </div>
                                <div className={styles.data}>
                                    <img src={trainingTimeIcon} alt='' />
                                    <p>днів доступу - {props.training.accessDays}</p>
                                </div>
                            </div>

                            <h3 className={styles.price}>
                                {props.training.price} ГРН
                            </h3>

                            <Button
                                className={styles.btn}
                                aria-expanded={true}
                                aria-controls={`coach-modal`}
                                onClick={() => userService.isAuthorized() ? setModalIsOpen(true) : setLoginIsOpen(true)}
                            >
                                <p>Купити</p>
                            </Button>
                        </div>
                    </div>
                    <div className={styles.trainingDetailsBlock}>
                        <div className={styles.trainingDetailsList}>
                            { props.training.coachingDetailParents && props.training.coachingDetailParents.map(d =>
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
                        onClick={() => userService.isAuthorized() ? setModalIsOpen(true) : setLoginIsOpen(true)}
                    >
                        <p>Купити</p>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default TrainingDetailsContent;
