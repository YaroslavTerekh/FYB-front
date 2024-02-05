import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ReviewsCarouselArrow from './components/ReviewsCarouselArrow/ReviewsCarouselArrow';
import { BEFORE_AFTER_PHOTOS, MOCKED_REVIEWS_PHOTOS } from './constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ReviewsSection.css';
import ReviewsAnimateHeight from './components/ReviewsCarouselArrow/ReviewsAnimateHeight';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedbacksHelper } from '../../../../../context/content-context/content-context.helper';
import Button from '../../../../../components/Button/Button';
import reviewsIconArrow from '../../../../../img/components/icon5.png';
import AnimateHeight from 'react-animate-height';
import faqIcon from '../FAQSection/images/icon1.png';

const ReviewsSection = () => {
    const isMobile = useMediaQuery({ maxWidth: 900 });

    const dispatch = useDispatch();
    const currentContentState = useSelector(state => state.content);

    const [selectedItem, setSelectedItem] = useState(null);
    const [list, setList] = useState([]);

    const handleToggle = (index) => {
        setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === index ? null : index
        );
    };

    useEffect(() => {
        getFeedbacksHelper(dispatch);
    }, []);

    useEffect(() => {
        if(currentContentState.feedbacks && currentContentState.feedbacks.length > 0) {
            setList(currentContentState.feedbacks);
        }
    }, [currentContentState.feedbacks]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
        prevArrow: <ReviewsCarouselArrow direction='prev' />,
        nextArrow: <ReviewsCarouselArrow direction='next' />,
    };

    return (
        <div className='reviews'>
            <div className='container'>
                <div className='whom__title tlt vetrino'>
                    <h2>Відгуки</h2>
                </div>
                { (list && list.length > 0) &&
                <Slider {...settings}>
                    {list.map((data, index) => (
                        <div className='slider-block' key={index}>
                            <div className='slider-block__img'>
                                <p><a href={'https://www.instagram.com/'+ data.instagramLink}>{data.instagramLink}</a></p>
                                <p>{data.feedbackText}</p>
                            </div>

                            <div className='detal-spoiler' >
                                <Button
                                    className='detal-spoiler__text'
                                    aria-expanded={selectedItem === index}
                                    aria-controls={`example-panel-${index}`}
                                    onClick={() => handleToggle(index)}
                                >
                                    <span>Переглянути фото “До” та “Після”</span>
                                    <div className='detal-spoiler__img'>
                                        <img
                                            className={selectedItem === index ? 'active' : ''}
                                            src={reviewsIconArrow}
                                            alt={`FAQ Toggle ${index}`}
                                        />
                                    </div>
                                </Button>
                                {selectedItem === index && (
                                    <AnimateHeight
                                        id={`example-panel-${index}`}
                                        duration={500}
                                        height={'auto'}
                                        className='detal-spoiler__photo'
                                    >
                                        <div className='review_photos'>
                                            <img
                                                className={selectedItem === index ? 'active' : ''}
                                                src={data.photos[0].filePath}
                                                alt={`Review ${index + 1}`}
                                            />

                                            <img
                                                className={selectedItem === index ? 'active' : ''}
                                                src={data.photos[1].filePath}
                                                alt={`Review ${index + 1}`}
                                            />
                                        </div>
                                    </AnimateHeight>
                                )}
                            </div>

                            {/*<ReviewsAnimateHeight index={index} />*/}
                        </div>
                    ))}
                </Slider> }
            </div>
        </div>
    );
};

export default ReviewsSection;
