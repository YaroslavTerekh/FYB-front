import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './VideosCarousel.module.css';
import React, { useEffect, useRef, useState } from 'react';
import deleteIcon from '../../img/components/delete_icon.png';
import addIcon from  '../../img/components/add_icon.png';
import Button from '../Button/Button';

const customStyles = {
    control: base => ({
        ...base,
        border: 0,
        // This line disable the blue border
        boxShadow: 'none'
    }),
    option: () => ({
        textAlign: 'center',
        display: 'flex',
        width: 'auto',
        padding: '5px 10px',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '0.5px solid rgb(165, 165, 165)',
        background: 'white',
        color: '#000',
        fontSize: '14px',
        cursor: 'pointer'
    }),
};

const VideosCarousel = ( props: { videoList:[], onOk: any, setList: any } ) => {
    const [currentVideos, setCurrentVideos] = useState([]);
    const fileInputRef = useRef(null);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(currentVideos[0]);

    useEffect(() => {
        if (props.videoList && props.videoList.length > 0) {
            setCurrentVideos(props.videoList);
        }
    }, [props.videoList]);

    function onChange(index) {
        setSelectedIndex(index);
        setSelectedVideo(currentVideos[index]);
    }

    function handleSelectChange(e) {
        if (e < 1 || e > 4) return;

        const data = currentVideos.findIndex((video) => video.index === e);
        const selected = currentVideos.findIndex((video) => video.index === selectedVideo.index);

        const newList = currentVideos.map((video) => ({ ...video }));

        if (data > -1) {
            newList[data].index = selectedVideo.index;
        }

        newList[selected].index = e;

        setCurrentVideos(newList);
        props.setList(newList);
        setSelectedVideo(newList[selected]);
    }

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleVideoChange = (e) => {
        const selectedVideoData = e.target.files[0];

        if (selectedVideoData) {
            const blob = new Blob([selectedVideoData], { type: selectedVideoData.type });

            const newList = currentVideos.length > 0 ? [...currentVideos] : [];

            newList.push({ data: blob, index: currentVideos.length + 1 });

            setCurrentVideos(newList);
            props.setList(newList);

            if (currentVideos.length === 0) {
                setSelectedVideo(newList[0]);
            }
        }
    };

    function deleteVideoHandler() {
        setCurrentVideos(currentVideos.filter((video) => video.index !== selectedVideo.index));
    }

    function onOk() {
        props.onOk(currentVideos);
    }

    return (
        <div className={styles.box}>
            <div className={styles.imgBox}>
                <div className={styles.imgInput} onClick={handleButtonClick}>
                    <p className={styles.placeholder}>Upload new video</p>
                    <img src={addIcon} alt="" />
                </div>
                <div className={styles.imgInput} onClick={deleteVideoHandler}>
                    <p className={styles.placeholder}>Delete video</p>
                    <img src={deleteIcon} alt="" />
                </div>
                <Button className={styles.btn} aria-expanded={true} aria-controls={`coach-modal`} onClick={onOk}>
                    <p>OK</p>
                </Button>
            </div>

            {currentVideos && currentVideos.length > 0 ? (
                <Carousel
                    className={styles.main}
                    showArrows={true}
                    onChange={onChange}
                    selectedItem={selectedIndex}

                >
                    {currentVideos.map((video, i) => (
                        <div key={i}>
                            <video controls  style={{width:"100%", height:"100%"}} src={URL.createObjectURL(video.data)}>
                            </video>
                        </div>
                    ))}
                </Carousel>
            ) : (
                <div className={styles.defaultImg}>
                    <p>No videos uploaded</p>
                </div>
            )}

            <input type="file" accept="video/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleVideoChange} />
        </div>
    );
}

export default VideosCarousel
