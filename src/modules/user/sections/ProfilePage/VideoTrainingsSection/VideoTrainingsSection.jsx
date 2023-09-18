import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Select from '../../../../../components/Select/Select';
import VideoPlayer from '../../../../../components/VideoPlayer/VideoPlayer';
import Button from '../../../../../components/Button/Button';
import styles from './VideoTrainingsSection.module.css';

import {
    MOCKED_TRAININGS_DATA,
    MOCKED_TRAININGS_TYPES,
} from '../../../pages/ProfilePage/constants';

const VideoTrainingsSection = ({
    selectedTrainingType,
    handleSelectChange,
}) => {
    const [trainingVideoSource, setTrainingVideoSource] = useState('');

    useEffect(() => {
        const selectedTraining = MOCKED_TRAININGS_DATA[selectedTrainingType];

        if (selectedTrainingType) {
            setTrainingVideoSource(selectedTrainingType);
        }
    }, [selectedTrainingType]);

    /**
     * @param {string} videoSource
     */
    const handleSelectTrainingVideo = (videoSource) => {
        setTrainingVideoSource(videoSource);
    };

    /**
     * @param {Object} options
     * @returns {Array<Object>}
     */
;

    return (
        <section className={styles.videoTrainings}>
            <div className='container'>
                <div className={styles.videoTrainingsBlock}>
                    <div className={styles.videoTrainingsNumber}>
                        <div>
                            {selectedTrainingType && selectedTrainingType.videos && selectedTrainingType.videos.map(
                                    (videoSource, videoIndex) => (
                                        <Button
                                            key={videoIndex}
                                            onClick={() =>
                                                handleSelectTrainingVideo(
                                                    videoSource
                                                )
                                            }
                                        >
                                            {`Тренування ${
                                                videoIndex + 1
                                            }`}
                                        </Button>
                                    )
                                )}
                        </div>
                    </div>

                    <div className={styles.videoTrainingsVideo}>
                        {trainingVideoSource && (
                            <VideoPlayer
                                videoSource={trainingVideoSource}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

VideoTrainingsSection.propTypes = {
    selectedTrainingType: PropTypes.string.isRequired,
    handleSelectChange: PropTypes.func.isRequired,
};

export default VideoTrainingsSection;
