import React from 'react';
import PropTypes from 'prop-types';

import './VideoPlayer.css';

const VideoPlayer = ({ videoSource = '' }) => (
    <div>
        <video controls>
            <source src={videoSource} type='video/mp4' />
        </video>
    </div>
);

VideoPlayer.propTypes = {
    videoSource: PropTypes.string.isRequired,
};

export default VideoPlayer;
