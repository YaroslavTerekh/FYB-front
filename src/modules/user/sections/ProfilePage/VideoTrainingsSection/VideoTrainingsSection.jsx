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
import ReactPlayer from 'react-player';

const VideoTrainingsSection = ({
    selectedTrainingType,
    handleSelectChange,
}) => {
    const [trainingVideoSource, setTrainingVideoSource] = useState('');

    useEffect(() => {
        const selectedTraining = selectedTrainingType?.videos?.[0].filePath;

        if (selectedTrainingType) {
            setTrainingVideoSource(selectedTraining);
        } else {
            setTrainingVideoSource(null);
        }
    }, [selectedTrainingType]);

    const handleSelectTrainingVideo = (videoSource) => {
        setTrainingVideoSource(videoSource);
    };

    return (
        <section className={styles.videoTrainings}>
            <div className='container'>
                <div className={styles.videoTrainingsBlock}>
                    <div className={styles.videoTrainingsNumber}>
                        <div>
                            {selectedTrainingType
                                && selectedTrainingType.videos
                                && selectedTrainingType.videos.filter(x => !x?.isPreview).map(
                                    (videoSource, videoIndex) => (
                                        <Button
                                            key={videoIndex}
                                            onClick={() =>
                                                handleSelectTrainingVideo(
                                                    videoSource?.filePath
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
                            <ReactPlayer
                                url={trainingVideoSource}
                                controls={true}
                                width='100%'
                                height='100%'
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
