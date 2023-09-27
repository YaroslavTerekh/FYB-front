import React from 'react';
import PropTypes from 'prop-types';

import '../TrainerSection.css';
import { CoachModel } from '../../../../../../models/coach-models/coach-model';
import data from 'bootstrap/js/src/dom/data';
import instagramIcon from '../../../../../../img/instagram.svg';

const TrainerLyda = ({data}) => (
    <div className='block-main__Lyda' key={data.id}>
        <div className='block-main__items_Lyda'>
            <div className='item__img1'>
                <img src={data?.photos[0].filePath} alt='Фото'></img>
            </div>

            <div className='item__img2'>
                <img src={data?.photos[0].filePath} alt='Фото'></img>
            </div>

            <div className='item__img3'>
                <img src={data?.photos[2].filePath} alt='Фото'></img>
            </div>

            <div className='info-item_Lyda'>
                <div className='info-item__title vetrino'>{data.firstName}</div>
                <div className='info-item__text'>
                    <ul className='info-item__text_item'>
                        { data.details && data.details.map(d =>
                            <li >{d.detail}</li>
                        )}

                    </ul>
                </div>
                <div className='info-item__inst'>
                    <a href={data.instagramLink}>
                        <img src={instagramIcon} alt='Instagram'></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
);


export default TrainerLyda;
