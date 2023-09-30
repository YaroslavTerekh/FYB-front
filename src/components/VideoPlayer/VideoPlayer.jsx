import React from 'react';
import PropTypes from 'prop-types';

import './VideoPlayer.css';

const VideoPlayer = ({ videoSource = '' }) => (
    <div>
        <video controls src={videoSource}>
        </video>
    </div>
);

VideoPlayer.propTypes = {
    videoSource: PropTypes.string.isRequired,
};

export default VideoPlayer;
