import React, { useRef, useState } from 'react';
import defaultImg from '../../img/components/admin-img-def.svg';
import styles from './PhotoUploader.module.css';

function PhotoUploader( { onChange } ) {
    const fileInputRef = useRef(null);
    const [imageBlob, setImageBlob] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            onChange(selectedImage);

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
            <div className={ imageBlob ? styles.imgData : ''} onClick={handleButtonClick}>
                { imageBlob ?
                    <img src={URL.createObjectURL(imageBlob)} alt="Uploaded" className={styles.img} />
                    :
                    <img src={defaultImg} alt='' />
                }
            </div>
            <input type="file" accept="image/*"  ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />
        </>
    );
}

export default PhotoUploader;
