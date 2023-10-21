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

const VideosCarousel = ( props: { videoList:[], onOk: any, setList: any, onDelete: any } ) => {
    const [currentVideos, setCurrentVideos] = useState([]);
    const fileInputRef = useRef(null);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(currentVideos[0]);

    useEffect(() => {
        if (props.videoList && props.videoList.length > 0) {
            setCurrentVideos(props.videoList);
            setSelectedVideo(props.videoList[0])
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

            let newList = currentVideos.length > 0 ? [...currentVideos] : [];

            // приховування старих фото
            if (newList &&
                newList.length > 0 &&
                newList?.find(x=> x?.filePath)) {

                newList = newList.filter(x=> !x.filePath);
            }

            newList.push({ data: blob, name: selectedVideoData.name, index: currentVideos.length + 1 });

            setCurrentVideos(newList);
            props.setList(newList);

            if (currentVideos.length === 0) {
                setSelectedVideo(newList[0]);
            }
        }
    };

    function deleteVideoHandler() {
        if(selectedVideo?.filePath && props.onDelete) {
            props.onDelete(selectedVideo.id);
            setCurrentVideos(currentVideos.filter((video) => video.filePath !== selectedVideo.filePath));
        } else {
            setCurrentVideos(currentVideos.filter((video) => video.index !== selectedVideo.index));
        }
    }

    function onOk() {
        props.onOk(currentVideos.filter(x=> !x.filePath));
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

                        video?.filePath
                            ?  <div key={i}>
                                    <video controls  style={{width:"100%", height:"100%"}} src={video?.filePath}>
                                    </video>
                                </div>
                            : <div key={i}>
                                <video controls  style={{width:"100%", height:"100%"}} src={URL.createObjectURL(video.data)}>
                                </video>
                            </div>

                    ))}
                </Carousel>
            ) : (
                <div className={styles.defaultImg}>
                    <svg width="56" height="56" viewBox="0 0 100 64"  xmlns="http://www.w3.org/2000/svg">
                        <path style={{fill:'#b5b5b5'}} d="M75.4045 21.9543L74.599 18.2022C72.8329 9.97448 65.5256 4 57 4H22C12.0589 4 4 12.0589 4 22V42C4 51.9411 12.0589 60 22 60H57C65.5972 60 72.9478 53.9261 74.6389 45.6071L75.4137 41.7958L84.9083 51.9997C86.0433 53.2196 87.6345 53.9125 89.3008 53.9125C92.6145 53.9125 95.3008 51.2262 95.3008 47.9125V15.8278C95.3008 14.1615 94.6079 12.5703 93.388 11.4352C90.9621 9.17788 87.1656 9.31459 84.9083 11.7405L75.4045 21.9543ZM81.9799 9.01572C85.7421 4.97248 92.0696 4.74463 96.1129 8.50681C98.146 10.3986 99.3008 13.0506 99.3008 15.8278V47.9125C99.3008 53.4353 94.8237 57.9125 89.3008 57.9125C86.5237 57.9125 83.8717 56.7576 81.9799 54.7245L77.5256 49.9375C74.3142 58.2514 66.2481 64 57 64H22C9.84974 64 0 54.1503 0 42V22C0 9.84974 9.84974 0 22 0H57C66.1749 0 74.1936 5.65922 77.454 13.8798L81.9799 9.01572Z" fill="black"/>
                        <path style={{fill:'#b5b5b5'}} d="M40 30.208V18.208C40 17.1034 40.8954 16.208 42 16.208C43.1046 16.208 44 17.1034 44 18.208V30.208H56C57.1046 30.208 58 31.1034 58 32.208C58 33.3126 57.1046 34.208 56 34.208H44V46.208C44 47.3126 43.1046 48.208 42 48.208C40.8954 48.208 40 47.3126 40 46.208V34.208H28C26.8954 34.208 26 33.3126 26 32.208C26 31.1034 26.8954 30.208 28 30.208H40Z" fill="black"/>
                    </svg>
                </div>
            )}

            <input type="file" accept="video/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleVideoChange} />
        </div>
    );
}

export default VideosCarousel
