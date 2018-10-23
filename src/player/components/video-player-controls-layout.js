import React from 'react';
import './video-player-controls-layout.css';

const VideoPlayerControlsLayout = props =>
    <div className="VideoPlayerControls">
        {props.children}
    </div>

export default VideoPlayerControlsLayout;