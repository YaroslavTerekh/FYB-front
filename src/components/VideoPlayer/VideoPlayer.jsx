import React from 'react';
import PropTypes from 'prop-types';

import './VideoPlayer.css';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoSource = '' }) => (
    <div>
        <ReactPlayer
            url={videoSource}
            controls={true}
            style={{width:'1000px', height:'600px'}}
        />
    </div>
);

VideoPlayer.propTypes = {
    videoSource: PropTypes.string.isRequired,
};

export default VideoPlayer;
