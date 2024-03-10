import React, { useState, useEffect } from 'react';
import Button from '../../../../../components/Button/Button';
import styles from './VideoTrainingsSection.module.css';
import ReactPlayer from 'react-player';
import { removeUserSpinner, setUserSpinner } from '../../../../../context/spinner-context/spinner-actions';
import { useDispatch } from 'react-redux';

const VideoTrainingsSection = ({
    selectedTrainingType,
    handleSelectChange,
}) => {
    const [trainingVideoSource, setTrainingVideoSource] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserSpinner());
        window.scrollTo(0, 0);

        if(selectedTrainingType?.id) {
            const timer = setTimeout(() => {


                dispatch(removeUserSpinner());
                clearTimeout(timer);
            }, 1000);
        }

    }, [selectedTrainingType]);

    useEffect(() => {
        const selectedTraining = selectedTrainingType?.videos?.[0].filePath;
        if (selectedTrainingType && selectedTraining && typeof selectedTraining === "string") {
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
                           <>
                               <ReactPlayer url={trainingVideoSource} muted={true}  playing={false} loop={true} controls={true} width={'100%'} height={'100%'} />

                           </>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VideoTrainingsSection;
