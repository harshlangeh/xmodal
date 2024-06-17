// VideoSection.js
import React from 'react';
import YouTube from 'react-youtube';
import './VideoSection.css'

const VideoSection = () => {
    // YouTube video options
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    // YouTube video URL
    const videoUrl = 'https://www.youtube.com/watch?v=f3PwniWd1KY';

    // Extracting video ID
    const videoId = videoUrl.split('v=')[1];

    return (
        <div className='yt'>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
};

export default VideoSection;
