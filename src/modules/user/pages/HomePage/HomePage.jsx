import React from 'react';

import MainBannerSection from '../../sections/HomePage/MainBannerSection/MainBannerSection';
import TrainingListSection from '../../sections/HomePage/TrainingSection/TrainingListSection';
import WhomSection from '../../sections/HomePage/WhomSection/WhomSection';
import TrainerSection from '../../sections/HomePage/TrainerSection/TrainerSection';
import ReviewsSection from '../../sections/HomePage/ReviewsSection/ReviewsSection';
import FAQSection from '../../sections/HomePage/FAQSection/FAQSectorSection';

const HomePage = () => (
    <>
        <MainBannerSection />
        <TrainingListSection />
        <WhomSection />
        <TrainerSection />
        <ReviewsSection />
        <FAQSection />
    </>
);

export default HomePage;
