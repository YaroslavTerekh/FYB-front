import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../../../../components/Button/Button';
import { ROUTES } from '../../../../../../../constants';
import { getPayForm } from '../../../../../../../api/content-api';
import styles from '../../../../../buy-modal/modal.module.css';
import ModalWindow from '../../../../../../../components/Modal/ModalWindow';
import BuyAlertModal from '../../../../../buy-modal/BuyAlertModal';

const TrainingCard = ({
    id,
    title,
    description,
    coachingPhoto,
    icon,
    videos,
    accessDays,
    gift,
    price,
    className,
    foodId,
    food,
    purchaseProductType
}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);


    function onModalCloseHandler() {
        setModalIsOpen(false);
    }

    return (
        <>
        <BuyAlertModal
            purchaseProductType={purchaseProductType}
            onClose={onModalCloseHandler}
            isOpen={modalIsOpen}
            text={"Підвердіть покупку"}
            productId={id}
        />
        <div className='training-block'>
            <div className={`training-block__items items-training ${className}`}>
                <div className='items-training__img'>
                    <img className='img-training' src={coachingPhoto?.filePath} />
                </div>
                <div className='items-training__info info-training'>
                    <div className='info-training__title vetrino'>{title}</div>
                    <div className='info-training__subtitle'>{description}</div>
                    <div className='info-training__picture picture-training'>
                        <div className='picture-training__numerosity'>
                            {<img src={icon} /> && (
                                <div className='picture-training__icon'>
                                    <img src={icon} />
                                </div>
                            )}
                            {videos && (
                                <div className='picture-training__text'>
                                    {videos.length} тренувань
                                </div>
                            )}
                        </div>
                        {accessDays && (
                            <div className='picture-training__time picture-training__text'>
                                {accessDays}
                            </div>
                        )}
                        {gift && (
                            <div className='picture-training__gift picture-training__text'>
                                {gift}
                            </div>
                        )}
                    </div>
                    <div className='info-training__price vetrino'>{price}</div>
                    <div className='info-training__button button-training'>
                        <div className='button-training__white'>
                            <Button onClick={() => setModalIsOpen(true)}>{'Купити'}</Button>
                        </div>
                        <div className='button-training_blu'>
                            <Link
                                className='button-training__blu'
                                to={ROUTES.details+"/" + id}
                            >
                                Детальніше
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
)};

export default TrainingCard;
