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
                               {/*<video controls="true" autoPlay="false" src={"https://firebasestorage.googleapis.com/v0/b/feel-your-body.appspot.com/o/videos%2FIMG_2379-001_done%202.mp4?alt=media&amp;token=9bd37a85-ed5d-43cb-86a5-29eff2f07f2d"}>*/}
                               {/*</video>*/}
                               {/*<iframe*/}
                               {/*    title="Training Video"*/}
                               {/*    width="100%"*/}
                               {/*    height="100%"*/}
                               {/*    src={trainingVideoSource}*/}
                               {/*    frameBorder="0"*/}
                               {/*    allowFullScreen*/}
                               {/*></iframe>*/}

                               <ReactPlayer url={trainingVideoSource} muted={true}  playing={false} loop={true} controls={true} width={'100%'} height={'100%'} />

                               {/*<video width="640" height="360" controls>*/}

                               {/*    <source src={trainingVideoSource} type="video/mp4" />*/}
                               {/*    <source src={trainingVideoSource} type="video/ogg" />*/}

                               {/*    <object width="640" height="360" type="application/x-shockwave-flash" data={trainingVideoSource}>*/}

                               {/*        <param name="movie" value="__FLASH__.SWF" />*/}
                               {/*        <param name="flashvars" value={`controlbar=over&amp;image=__POSTER__.JPG&amp;file=` + trainingVideoSource} />*/}

                               {/*        <img src={trainingVideoSource} width="640" height="360" alt="__TITLE__"*/}
                               {/*             title="No video playback capabilities, please download the video below" />*/}
                               {/*    </object>*/}
                               {/*</video>*/}

                               {/*<div*/}
                               {/*    dangerouslySetInnerHTML={{*/}
                               {/*        __html: `*/}
                               {/*         <video*/}
                               {/*           loop*/}
                               {/*           muted={true}*/}
                               {/*           autoPlay*/}
                               {/*           playsInline={true}*/}
                               {/*           id="video"*/}
                               {/*         >*/}
                               {/*         <source autoPlay muted={true} src="${trainingVideoSource}" type="video/mp4" />*/}
                               {/*         </video>`,*/}
                               {/*    }}*/}
                               {/*/>*/}

                               {/*<video width="750" height="500" controls>*/}
                               {/*    <source src={trainingVideoSource} />*/}
                               {/*</video>*/}
                               {/*<ReactPlayer url={"https://firebasestorage.googleapis.com/v0/b/feel-your-body.appspot.com/o/videos%2FIMG_2379-001_done%202.mp4?alt=media&amp;token=9bd37a85-ed5d-43cb-86a5-29eff2f07f2d"} playing={false} loop={false} controls={true} width={'100%'} height={'100%'} />*/}
                           </>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VideoTrainingsSection;
