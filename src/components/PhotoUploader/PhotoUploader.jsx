import React, { useEffect, useRef, useState } from 'react';
import defaultImg from '../../img/components/admin-img-def.svg';
import styles from './PhotoUploader.module.css';

function PhotoUploader( { onChange, icon, inputMode, placeholder, imgName, removePhoto, setRemoved } ) {
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
                <div className={ styles.imgData } onClick={handleButtonClick} >
                    { imageBlob  ?
                        <img src={URL.createObjectURL(imageBlob)} alt="Uploaded" className={styles.img} />
                        :
                        imgName

                            ? <img src={imgName} alt='' className={styles.img}/>
                            : <img src={icon ?? defaultImg}   alt='' />

                    }

                </div>

            }

            <input type="file" accept="image/*"  ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />
        </>
    );
}

export default PhotoUploader;
