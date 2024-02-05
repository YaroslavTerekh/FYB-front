import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TrainingCarouselArrow from './components/TrainingCarouselArrow/TrainingCarouselArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// TODO: review this
import '../../HomePage/TrainingSection/TrainingListSection.css';
import '../../HomePage/TrainingSection/carousel.css';

import { ROUTES } from '../../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsCarouselArrow from '../../HomePage/ReviewsSection/components/ReviewsCarouselArrow/ReviewsCarouselArrow';
import { useMediaQuery } from 'react-responsive';

const TrainingCarouselSection = ({ filteredTrainingData }) => {
    const responsiveSettings = [
        {
            breakpoint: 2500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1110,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];

    const dispatch = useDispatch();
    const currentContentState = useSelector(state => state.content);
    const [list, setList] = useState([]);

    useEffect(() => {

        return () => {
            setList([]);
        }
    }, []);

    useEffect(() => {
        const a = [...currentContentState.coaching, ...currentContentState.food];
        setList(a);
    }, [currentContentState.coaching, currentContentState.food]);



    const isMobile = useMediaQuery({ maxWidth: 900 });
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
        prevArrow:
            <TrainingCarouselArrow
                direction='prev'
                additionalClassName='custom-arrow'
                onClick={() => {}}
            />,
        nextArrow:
            <TrainingCarouselArrow
                direction='next'
                additionalClassName='custom-arrow'
                onClick={() => {}}
            />,
        responsive: responsiveSettings
    };

    return (
        <section id='training' className='training__carousel'>
            <div className='container'>
                <div className='training__title tlt vetrino'>
                    <h2>Інші тренування</h2>
                </div>
                <Slider {...settings}>
                    {list.map(
                        (trainingData, index) => (
                            // TODO: it makes sense to put it in ./components/TrainingCard/TrainingCard.jsx
                            <div className='carusel-block' key={index}>
                                <div className='carusel-block__inf'>
                                    <div className='carusel-block__img'>
                                        <img
                                            className=''
                                            src={trainingData.coachingPhoto?.filePath ?? trainingData?.photos?.find(x=>x.orderId === 0)?.filePath}
                                            alt={trainingData.alt}
                                        />
                                    </div>
                                    <div className='info-training__title vetrino'>
                                        {trainingData.title}
                                    </div>
                                    <div className='info-training__subtitle'>
                                        <p style={{textOverflow: "ellipsis"}}>{trainingData.description}</p>
                                    </div>
                                </div>

                                { trainingData.id && (trainingData?.foodPoints && trainingData?.foodDetails) &&
                                    <div className='carusel-block__button'>
                                        <Link
                                            className='button-training__blu'
                                            to={ROUTES.foodDetails + "/" + trainingData.id}
                                        >
                                            Детальніше
                                        </Link>
                                    </div>
                                }

                                { trainingData.id && !(trainingData?.foodPoints && trainingData?.foodDetails) &&
                                    <div className='carusel-block__button'>
                                        <Link
                                            className='button-training__blu'
                                            to={ROUTES.details + "/" + trainingData.id}
                                        >
                                            Детальніше
                                        </Link>
                                    </div>
                                }
                            </div>
                        )
                    )}
                </Slider>
            </div>
        </section>
    );
};

TrainingCarouselSection.propTypes = {
    filteredTrainingData: PropTypes.object.isRequired,
};

export default TrainingCarouselSection;
