import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoUploader.module.css';

function VideoUploader( { onChange, icon, inputMode, placeholder, imgName, removePhoto, setRemoved } ) {
    const fileInputRef = useRef(null);
    const [imageBlob, setImageBlob] = useState(null);
    const [imageName, setImageName] = useState(null);
    useEffect(() => {
        if(removePhoto) {
            setRemoved(false);
            setImageName(null);
            setImageName(null);
        }
    }, [removePhoto]);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            onChange(selectedImage);
            setImageName(selectedImage.name);

            const reader = new FileReader();

            reader.onload = (event) => {
                const blob = new Blob([event.target.result], { type: selectedImage.type });
                setImageBlob(blob);
            };

            reader.readAsArrayBuffer(selectedImage);
        }
    };

    return (
        <>
            { inputMode ?
                <div className={styles.imgInput} onClick={handleButtonClick}>
                    { !imageName && <p className={styles.placeholder}>{placeholder}</p>}
                    { imageName && <p className={styles.text}>{imageName}</p>}
                    <img src={icon} alt='' />
                </div>
                :
                <div className={ imageBlob ? styles.imgData : ''} onClick={handleButtonClick}>
                    { imageBlob  ?
                        <video controls  style={{width:"100%"}} src={URL.createObjectURL(imageBlob)}>
                        </video>
                        :
                        <svg width="56" height="56" viewBox="0 0 100 64"  xmlns="http://www.w3.org/2000/svg">
                            <path style={{fill:'#b5b5b5'}} d="M75.4045 21.9543L74.599 18.2022C72.8329 9.97448 65.5256 4 57 4H22C12.0589 4 4 12.0589 4 22V42C4 51.9411 12.0589 60 22 60H57C65.5972 60 72.9478 53.9261 74.6389 45.6071L75.4137 41.7958L84.9083 51.9997C86.0433 53.2196 87.6345 53.9125 89.3008 53.9125C92.6145 53.9125 95.3008 51.2262 95.3008 47.9125V15.8278C95.3008 14.1615 94.6079 12.5703 93.388 11.4352C90.9621 9.17788 87.1656 9.31459 84.9083 11.7405L75.4045 21.9543ZM81.9799 9.01572C85.7421 4.97248 92.0696 4.74463 96.1129 8.50681C98.146 10.3986 99.3008 13.0506 99.3008 15.8278V47.9125C99.3008 53.4353 94.8237 57.9125 89.3008 57.9125C86.5237 57.9125 83.8717 56.7576 81.9799 54.7245L77.5256 49.9375C74.3142 58.2514 66.2481 64 57 64H22C9.84974 64 0 54.1503 0 42V22C0 9.84974 9.84974 0 22 0H57C66.1749 0 74.1936 5.65922 77.454 13.8798L81.9799 9.01572Z" fill="black"/>
                            <path style={{fill:'#b5b5b5'}} d="M40 30.208V18.208C40 17.1034 40.8954 16.208 42 16.208C43.1046 16.208 44 17.1034 44 18.208V30.208H56C57.1046 30.208 58 31.1034 58 32.208C58 33.3126 57.1046 34.208 56 34.208H44V46.208C44 47.3126 43.1046 48.208 42 48.208C40.8954 48.208 40 47.3126 40 46.208V34.208H28C26.8954 34.208 26 33.3126 26 32.208C26 31.1034 26.8954 30.208 28 30.208H40Z" fill="black"/>
                        </svg>
                    }
                </div>

            }

            <input type="file" accept="video/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />
        </>
    );
}

export default VideoUploader;
