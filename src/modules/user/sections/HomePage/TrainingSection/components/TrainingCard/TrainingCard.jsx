import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../../../../components/Button/Button';
import { ROUTES } from '../../../../../../../constants';
import BuyAlertModal from '../../../../../buy-modal/BuyAlertModal';
import { GetTrainingIconHelper } from '../../constants';
import sexyIcon from '../../../../../../../img/components/icon14.png';

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
    foodPoints,
    purchaseProductType,
    isFood,
    photos,
    coachingId
}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);


    function onModalCloseHandler() {
        setModalIsOpen(false);
    }

    useEffect(() => {

    }, [icon]);

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
                    { isFood
                        ? <img className='img-training' src={photos?.find(x=>x.orderId === 0)?.filePath} />
                        : <img className='img-training' src={coachingPhoto?.filePath} />
                    }

                </div>
                <div className='items-training__info info-training'>
                    <div className='info-training__title vetrino'>{title}</div>
                    <div className='info-training__subtitle'>{description}</div>
                    <div className='info-training__picture picture-training'>

                        { !isFood
                            ? <div className='picture-training__numerosity'>
                                <div className='picture-training__icon'>
                                        <img src={sexyIcon} />
                                    </div>
                                    {videos && (
                                        <div className='picture-training__text'>
                                           тренувань -  {videos.length}
                                        </div>
                                    )}
                            </div>
                            :  <div className='picture-training__time picture-training__text'>
                                {`Pаціон на кількість днів - `} <strong>{foodPoints.length}</strong>
                            </div>
                        }
                        { accessDays > 0 && !isFood && (
                            <div className='picture-training__time picture-training__text'>
                                 днів доступу - <strong>{accessDays}</strong>
                            </div>
                        )}
                        {!isFood && foodId && (
                            <div className='picture-training__gift picture-training__text'>
                                <p>+ харчування в подарунок</p>
                            </div>
                        )}
                    </div>
                    <div className='info-training__price vetrino'>{price} грн</div>
                    <div className='info-training__button button-training'>
                        <div className='button-training__white'>
                            <Button onClick={() => setModalIsOpen(true)}>{'Купити'}</Button>
                        </div>
                        { isFood
                            ?   <div className='button-training__white button-training_blu'>
                                    <Link
                                        className='button-training__blu'
                                        to={ROUTES.foodDetails+"/" + id}
                                    >
                                        Детальніше
                                    </Link>
                                </div>
                            :  <div className='button-training__white button-training_blu'>
                                    <Link
                                        className='button-training__blu'
                                        to={ROUTES.details+"/" + id}
                                    >
                                        Детальніше
                                    </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
)};

export default TrainingCard;
